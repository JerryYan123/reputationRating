import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <Link href="/" className="hover:opacity-80 transition-opacity">
    <Image
      src="/images/logo.png"
      alt="BlockRate Logo"
      width={200}
      height={50}
      priority
    />
  </Link>
);

export default Logo;
