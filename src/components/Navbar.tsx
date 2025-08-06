import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b shadow-sm py-4 px-8 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-700">
        <Link href="/">Chess Forms</Link>
      </div>
      <div className="flex gap-6 text-lg">
        <Link href="/about" className="hover:text-blue-700">About</Link>
        <Link href="/forms" className="hover:text-blue-700">Forms</Link>
        <Link href="/faq" className="hover:text-blue-700">FAQ</Link>
      </div>
    </nav>
  );
};

export default Navbar;
