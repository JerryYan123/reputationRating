"use client";
import { use, useState } from 'react';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import CommentHistory from "@/components/CommentHistory";
import Header from "@/components/Layout/Header";
import Link from "next/link";
import { USERS, User } from '@/constants/users';
import OpenAI from "openai";
import { OPENAI_API_KEY, OPENAI_BASE_URL } from "@/secrets";
import { USER_COMMENTS } from '@/constants/comments';
import { PROJECTS } from '@/constants/projects';

const getRandomGradient = () => {
    const gradients = [
        'from-purple-400 to-pink-600',
        'from-blue-400 to-emerald-400',
        'from-red-400 to-yellow-400',
        'from-indigo-400 to-cyan-400',
        'from-pink-400 to-orange-400',
        'from-green-400 to-blue-400',
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
};

const UserHistoryPage = ({ params }: { params: { id: string } }) => {
    const [summary, setSummary] = useState<string>("");
    const user = USERS.find(u => u.id === parseInt(params.id));

    const handleSummarize = async () => {
        try {
            const openai = new OpenAI({
                apiKey: OPENAI_API_KEY,
                baseURL: OPENAI_BASE_URL,
                dangerouslyAllowBrowser: true
            });

            const userComments = USER_COMMENTS
                .filter(comment => comment.userId === parseInt(params.id))
                .sort((a, b) => b.weight - a.weight)
                .slice(0, 5);

            const commentsWithProjects = userComments.map(comment => {
                const project = PROJECTS.find(p => p.id === comment.projectId);
                return {
                    ...comment,
                    projectName: project?.name,
                    projectDescription: project?.description,
                    projectRank: project?.rank
                };
            });

            const commentsText = commentsWithProjects.map(comment => 
                `Project: ${comment.projectName} (${comment.projectRank})\n` +
                `Review: "${comment.review}" (Rating: ${comment.rating}/5, Weight: ${comment.weight})\n` +
                `Project Description: ${comment.projectDescription}\n`
            ).join('\n');

            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [{
                    role: "user",
                    content: `Analyze this user's review patterns and preferences based on their top 5 reviews: \n${commentsText}\n` +
                             `Please summarize:\n` +
                             `1. What types of projects they tend to review (e.g., L1, L2, DeFi, etc.)\n` +
                             `2. Their general sentiment and evaluation style\n` +
                             `3. The depth and quality of their reviews\n` +
                             `Summarize in 2-3 concise sentences.`
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

    if (!user) {
        return <div>User not found</div>;
    }

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
                                    Home
                                </Link>
                            </li>
                            <li className="before:content-['>'] before:mx-2 text-black">User Profile</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex justify-between items-start">
                            <div className="flex">
                                <div className="w-24 h-24 rounded-lg mr-4 overflow-hidden">
                                    <div className={`w-full h-full bg-gradient-to-br ${getRandomGradient()} flex items-center justify-center text-white text-2xl font-bold`}>
                                        {user.name.slice(0, 2).toUpperCase()}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <h1 className="text-3xl font-bold text-black">{user.name}</h1>
                                        <div className="relative ml-2 cursor-pointer group">
                                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                                            </svg>
                                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                                <div className="bg-gray-800 text-white text-sm py-1 px-3 rounded shadow-lg">
                                                    Verified by Scroll Canvas Badge
                                                </div>
                                                <div className="w-2 h-2 bg-gray-800 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-800">Total Reviews: {user.totalReviews}</p>
                                    <p className="text-gray-800">Total Likes: {user.totalLikes}</p>
                                    <p className="text-gray-800">Rank: #{user.rank}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className={`text-6xl font-bold ${user.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {user.change >= 0 ? '+' : ''}{user.change}
                                </div>
                                <div className="text-sm text-gray-600">Change in Rank</div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
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

                    <div className="grid grid-cols-1 gap-8">
                        <div className="col-span-1">
                            <h2 className="text-3xl font-bold mb-4 text-black">Comment History</h2>
                            <CommentHistory userId={parseInt(params.id)} />
                        </div>
                    </div>
                </main>
            </div>
        </DynamicContextProvider>
    );
};

export default UserHistoryPage;
