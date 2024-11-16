"use client";
import React, { useState } from 'react';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { queryAttestations } from "@/components/helper_function/get_data";
import CommentList from "@/components/CommentList";
import Header from "@/components/Layout/Header";
import UserAccount from "@/components/UserAccount";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from '@/constants/projects';
import OpenAI from "openai";
import { OPENAI_API_KEY } from "@/secrets";
import { USER_COMMENTS } from '@/constants/comments';

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
    const unwrappedParams = params;
    const [summary, setSummary] = useState<string>("");
    
    const projectDetails: Project = PROJECTS.find(p => p.id === parseInt(unwrappedParams.id)) || {
        id: parseInt(unwrappedParams.id),
        name: 'Unknown Project',
        address: '',
        change: 0,
        score: 0,
        reviews: 0,
        rank: 'Unranked',
        description: 'No description available',
        image: "/placeholder-project-image.png"
    };

    const handleSummarize = async () => {
        try {
            const openai = new OpenAI({
                apiKey: OPENAI_API_KEY,
                dangerouslyAllowBrowser: true
            });

            // Get top 5 comments sorted by weight
            const topComments = [...USER_COMMENTS]
                .sort((a, b) => b.weight - a.weight)
                .slice(0, 5);

            // Create a string of top 5 comments
            const commentsText = topComments.map(comment => 
                `${comment.username}: "${comment.review}" (Rating: ${comment.rating}/5, Weight: ${comment.weight})`
            ).join('\n');

            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [{
                    role: "user",
                    content: `Summarize the main sentiment and key points from these top 5 project reviews: \n${commentsText}\n Summarize in a few sentences.`
                }],
                temperature: 0.3,
            });

            const commentsSummary = completion.choices[0].message.content?.trim();
            setSummary(commentsSummary || "Unable to generate summary");
        } catch (error: any) {
            console.error('Summarization error:', error);
            setSummary(`Error: ${error.message || 'Failed to generate summary'}`);
        }
    };

    return (
        <DynamicContextProvider
            settings={{
                environmentId: '37e18cad-e1f1-4822-b1b9-1cbde0957aa3',
                walletConnectors: [EthereumWalletConnectors],
            }}
        > 
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">
                    <div className="text-sm breadcrumbs mb-4">
                        <ul className="flex">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-black">
                                    All
                                </Link>
                            </li>
                            <li className="before:content-['>'] before:mx-2 text-black">{projectDetails.name}</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex">
                                <div className="w-24 h-24 rounded-lg mr-4 overflow-hidden">
                                    <Image src={projectDetails.image} alt={projectDetails.name} width={96} height={96} style={{ objectFit: "cover" }} />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-black">{projectDetails.name}</h1>
                                    <p className="text-gray-600">{projectDetails.rank}</p>
                                    <p className="mt-2 text-gray-800 whitespace-pre-line">{projectDetails.description}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-6xl font-bold text-red-500">{projectDetails.score}</div>
                                <div className="text-sm text-gray-600">{projectDetails.reviews} reviews</div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200"
                                onClick={handleSummarize}
                            >
                                AI Summarize
                            </button>
                        </div>
                        {summary && (
                            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Summary</h3>
                                        <div className="prose prose-blue">
                                            <p className="text-gray-700 leading-relaxed">{summary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <CommentList />
                        </div>
                        <div className="space-y-4">
                            <UserAccount projectId={projectDetails.id} />
                        </div>
                    </div>
                </main>
            </div>
        </DynamicContextProvider>
    );
};

export default ProjectDetailPage;
