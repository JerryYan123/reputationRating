"use client";
import { use } from 'react';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import CommentHistory from "@/components/CommentHistory";
import Header from "@/components/Layout/Header";
import Link from "next/link";
import { USERS, User } from '@/constants/users';

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
    const user = USERS.find(u => u.id === parseInt(params.id));

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
                                    <h1 className="text-3xl font-bold text-black">{user.name}</h1>
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold mb-4 text-black">Comment History</h2>
                            <CommentHistory userId={parseInt(params.id)} />
                        </div>
                    </div>
                </main>
            </div>
        </DynamicContextProvider>
    );
};

export default UserHistoryPage;
