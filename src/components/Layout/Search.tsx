"use client";

import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/constants/projects";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "@/secrets";

const Search = () => {
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
            } catch (error: any) {
                console.error('Search error:', error);
                setSearchQuery(`Error: ${error.message || 'Failed to get suggestion'}`);
            }
        }
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto mt-8">
            <input
                type="text"
                placeholder="Ask any question to find the most related Web3 projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-black placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
        </div>
    );
};

export default Search;