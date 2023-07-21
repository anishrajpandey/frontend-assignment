import React from "react";
import Image from "next/image";
const ProductCard = ({ title, description, price, image, rating, review }) => {
  return (
    <div class="relative min-h-[380px] h-fit w-[340px] bg-white shadow-xl rounded-md p-2 mx-1 my-3 cursor-pointer">
      <div class="overflow-x-hidden rounded-md relative">
        <Image
          class="h-40 rounded-md w-full object-cover"
          //   height={40}
          layout="fill"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
      </div>
      <div class="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p class="text-lg font-semibold text-gray-900 mb-0">{title}</p>
          <p class="text-md text-gray-800 mt-0">Rs. {price}</p>
        </div>
      </div>
      <div class="flex items-center gap-3 mb-1 mr-4 group cursor-pointer">
        <button className="bg-orange-400 h-10 grid items-center rounded-md w-full text-white">
          {" "}
          Buy Now
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 group-hover:opacity-50 opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <p className="text-sm text-gray-500 p-2 line-clamp-3">{description}</p>
      <div className="ratings p-3">
        <span className="text-2xl p-3 h-4">⭐⭐⭐⭐⭐</span>
        <span className="text-md p-3 h-4">(300)</span>
      </div>
    </div>
  );
};

export default ProductCard;
