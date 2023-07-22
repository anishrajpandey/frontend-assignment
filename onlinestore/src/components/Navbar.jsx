import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRef } from "react";
const Navbar = () => {
  let searchIcon = useRef(null);
  const [query, setQuery] = useState("");

  // for handling change in input and updating the state
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchIcon.current.click();
  };
  return (
    <div className="w-full bg-purple-600 flex p-4 gap-16 max flex-col align-center sm:flex-row">
      {/* Navigation Logo Container */}
      <Link href={"/"}>
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
      </Link>
      {/* Navigation links */}
      <ul className="navItems flex list-none gap-6 text-white text-sm font-bold items-center">
        <li className="hover:underline decoration-2 transition-all hover:text-yellow-400">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:underline decoration-2 w-32 transition-all hover:text-yellow-400">
          <Link href="/products" className="w-fit block">
            View All Products
          </Link>
        </li>
      </ul>
      {/* Search Bar */}

      <form action="#" className="inline-block ml-auto" onSubmit={handleSubmit}>
        <div className="searchBar w-full flex gap-2 items-center">
          <input
            type="search"
            onChange={handleInputChange}
            id="search"
            className="block ml-auto self-end max-w-40 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Shirt,gold..."
          />
          {/* search icon
           */}
          <Link
            ref={searchIcon}
            href={{
              pathname: "/products",
              query: { search: query },
            }}
            className="w-12 h-12 hover:bg-black rounded-lg flex justify-center items-center border-yellow-300 border hover:bg-transparent transition-all"
          >
            <svg
              className="w-8 h-8 text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
