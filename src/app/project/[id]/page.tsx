"use client";
import { use } from 'react';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import CommentList from "@/components/CommentList";
import Header from "@/components/Layout/Header";
import UserAccount from "@/components/UserAccount";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from '@/constants/projects';

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
    const unwrappedParams = use(params);
    
    const projectDetails: Project = PROJECTS.find(p => p.id === parseInt(unwrappedParams.id)) || {
        id: parseInt(unwrappedParams.id),
        name: 'Unknown Project',
        change: 0,
        score: 0,
        reviews: 0,
        rank: 'Unranked',
        description: 'No description available',
        image: "/placeholder-project-image.png"
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
                        <div className="flex justify-between items-start">
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <CommentList />
                        </div>
                        <div>
                            <UserAccount />
                        </div>
                    </div>
                </main>
            </div>
        </DynamicContextProvider>
    );
};

export default ProjectDetailPage;
