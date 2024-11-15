import React from "react";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="hover:opacity-80 transition-opacity">
    <span className="text-xl font-bold">Reputation</span>
  </Link>
);

export default Logo;
