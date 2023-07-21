import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const Herosection = () => {
  return (
    <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-2 gap-10 content-end w-fit bg--300 grid-rows-2 grid-cols-1">
      {/* left section */}
      <div className="left mr-auto flex flex-col gap-4 justify-center ">
        <h1 class="mb-4 mt-10 text-6xl text-center font-extrabold ">
          Online Store
        </h1>
        <p class="mb-6 font-light text-gray-500 md:text-lg lg:text-xl">
          Welcome to our online store! We offer a wide variety of products at
          competitive prices. Our products are sourced from all over the world,
          so you can be sure to find what you're looking for.We hope you enjoy
          shopping with us!
        </p>
        <Link
          href="./products"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-violet-900 text-white hover:bg-violet-600 transition-all "
        >
          Browse Products
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
        <Link
          href="./search"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 "
        >
          Search For Products
        </Link>
      </div>
      {/* right section */}
      <div class="right  lg:mt-0 justify-center flex">
        <Image
          src="/assets/shopping.png"
          width={400}
          height={400}
          alt="Image unavailable"
        />
      </div>
    </section>
  );
};

export default Herosection;
