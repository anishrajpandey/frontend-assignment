import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ProductCard = ({
  title,
  description,
  price,
  image = "/assets/unavailable-image.jpg",
  rate,
  count,
  category,
  id,
}) => {
  // when the user clicks in the card, the function for sending to product details page
  let router = useRouter();
  function routeToDetailsPage(id) {
    router.push(`/products/${id}`);
  }

  //obtaining numeric form of rating into ⭐⭐⭐star form hehe
  let getStarsFromRatings = (rating = 3.9) => {
    let ratingRounded = Math.round(rating);
    let Stars = "";
    for (let i = 1; i <= ratingRounded; i++) {
      Stars += "⭐";
    }
    return Stars;
  };
  return (
    <div
      className="relative min-h-[380px] h-fit w-[340px] bg-white border-3 hover:scale-105 transition-all shadow-xl rounded-md p-2 mx-1 my-3 cursor-pointer"
      onClick={() => routeToDetailsPage(id)}
    >
      <div className="overflow-x-hidden rounded-md h-40 relative">
        <Image
          className="h-40 rounded-md w-full object-contain"
          height={40}
          width={330}
          src={image}
        />
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">{title}</p>
          <div className="flex justify-between w-full">
            <p className="text-md text-gray-800 mt-0 font-semibold">${price}</p>{" "}
            <p className="text-sm italic text-gray-600 font-light mt-0 mx-8 ">
              {category}
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 p-2 line-clamp-3 ">{description}</p>

      <div className="flex items-center gap-3 mb-1 pl-3 pt-3 mr-4 group cursor-pointer">
        <button className="bg-orange-400 h-10 grid items-center rounded-md w-full text-white hover:bg-orange-700 transition-all ">
          {" "}
          Buy Now
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 group-hover:opacity-50 opacity-70"
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
      <div className="ratings p-3">
        <span className="text-2xl p-3 h-4">{getStarsFromRatings(rate)}</span>
        <span className="text-md p-3 h-4">({count})</span>
      </div>
    </div>
  );
};

export default ProductCard;
