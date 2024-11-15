import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
// import { Button } from "../ui/button";
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        
                        <Link href="/">
                            {/* <span className="text-xl font-bold">Reputation</span> */}
                            <Logo />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="relative mr-4">
                            <input
                                type="text"
                                placeholder="Search Project"
                                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
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
