import React from "react";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="hover:opacity-80 transition-opacity">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xl">R</span>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
        Reputation
      </span>
    </div>
  </Link>
);

export default Logo;
