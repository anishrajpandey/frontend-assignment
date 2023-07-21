import Image from "next/image";
import React from "react";
// import
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full bg-purple-600 flex  p-4 ">
      {/* Navigation Logo Container */}
      <div className="logoContainer flex align-middle items-center gap-2 text-white font-bold text-lg mx-12">
        <Image
          src="/assets/logo.png"
          alt="unavailable"
          width={50}
          height={50}
          style={{ borderRadius: "10%" }}
        />
        OnlineStore
      </div>
      {/* Navigation links */}
      <ul className="navItems flex list-none gap-6 text-white text-sm font-bold items-center">
        <li className="hover:underline decoration-2 transition-all hover:text-yellow-400">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:underline decoration-2 transition-all hover:text-yellow-400">
          <Link href="./products">Products</Link>
        </li>
        <li className="hover:underline decoration-2 transition-all hover:text-yellow-400">
          <Link href="./search">Search</Link>
        </li>
        <li className="hover:underline decoration-2 transition-all hover:text-yellow-400">
          <Link href="/">Surprise Me!</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
