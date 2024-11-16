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
    const [searchQuery, setSearchQuery] = useState("");

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
