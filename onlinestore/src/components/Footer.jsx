import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="bg-white rounded-lg shadow m-4 flex flex-col justify-center">
      <span class="text-sm text-gray-500 text-center">
        © 2023
        <a href="https://flowbite.com/" class="hover:underline">
          OnlineStore™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex w-fit mx-auto flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
        <li>
          <Link href="/products" class="mr-4 hover:underline md:mr-6 ">
            All Products
          </Link>
        </li>
        <li>
          <Link href="/products/1" class="mr-4 hover:underline md:mr-6">
            Product 1
          </Link>
        </li>
        <li>
          <Link href="/products/2" class="mr-4 hover:underline md:mr-6">
            Product 2
          </Link>
        </li>
        <li>
          <Link href="/products/3" class="hover:underline">
            Product 3
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
