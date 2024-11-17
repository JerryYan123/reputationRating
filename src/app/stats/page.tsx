"use client";
import React from 'react';
import Header from "@/components/Layout/Header";
import Link from "next/link";
import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const GraphsPage: React.FC = () => {
    return (
        <div>
            <DynamicContextProvider
                settings={{
                    environmentId: "37e18cad-e1f1-4822-b1b9-1cbde0957aa3", 
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
                            <li className="before:content-['>'] before:mx-2 text-black">Statistics</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h1 className="text-3xl font-bold text-black mb-6">Analytics Overview</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <img src="/images/line_chart.png" alt="Line Chart" className="w-full rounded-lg shadow-sm" />
                            <img src="/images/pie_chart.png" alt="Pie Chart" className="w-full rounded-lg shadow-sm" />
                        </div>
                    </div>
                </main>
            </div>
            </DynamicContextProvider>
        </div>
    );
};

export default GraphsPage;