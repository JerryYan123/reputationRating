"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
// import { Button } from "../ui/button";
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/constants/projects";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "@/secrets";

const Header = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            const searchTerm = searchQuery.trim();
            try {
                const openai = new OpenAI({
                    apiKey: OPENAI_API_KEY,
                    dangerouslyAllowBrowser: true
                });

                const completion = await openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    messages: [{
                        role: "user",
                        content: `Given the search query "${searchTerm}" and the following projects:
                            ${PROJECTS.map(p => `${p.name}: ${p.description}`).join('\n')}
                            
                            Which project is most relevant to the query? Return only the project name.`
                    }],
                    temperature: 0.3,
                });

                const suggestedProject = completion.choices[0].message.content?.trim();
                console.log('OpenAI suggested project:', suggestedProject);

                const matchedProject = PROJECTS.find(p => p.name.toLowerCase() === suggestedProject?.toLowerCase());
                
                if (matchedProject) {
                    router.push(`/project/${matchedProject.id}`);
                } else if (suggestedProject) {
                    router.push(`/project/${encodeURIComponent(suggestedProject.toLowerCase())}`);
                }
            } catch (error) {
                console.error('Search error:', error);
                setSearchQuery(`Error: ${error.message || 'Failed to get suggestion'}`);
            }
        }
    };

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <Logo />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="relative mr-4">
                            <input
                                type="text"
                                placeholder="Ask any question to find the most related Web3 projects..."
                                className="w-[600px] pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-black placeholder-gray-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearch}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                        <Link href="/list-project" className="mr-2">
                            <span className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                                List a Project
                            </span>
                        </Link>
                        <DynamicWidget />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
