"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
// import { Button } from "../ui/button";
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/constants/projects";

const Header = () => {
    const router = useRouter();

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-8">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
                                <Logo />
                            </Link>
                        </div>
                        <Link href="/stats">
                            <span className="text-gray-600 hover:text-black transition-colors">
                                Stats
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-8">
                        <Link href="/list-project">
                            <span className="bg-black hover:bg-black/90 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 inline-flex items-center hover:transform hover:scale-105">
                                List a Project
                            </span>
                        </Link>
                        <div className="ml-2 scale-125">
                            <DynamicWidget />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
