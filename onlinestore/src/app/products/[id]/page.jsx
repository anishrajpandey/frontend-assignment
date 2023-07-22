"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";
const page = () => {
  const path = usePathname();
  const id = path.split("/").at(-1); // getting the respective id of the product from the url

  // fetching single information based on id
  const info = useQuery(["products", "id"], () =>
    fetch(`https://fakestoreapi.com/products/${id}`).then((r) => r.json())
  );
  console.log(info);
  //obtaining numeric form of rating into ⭐⭐⭐star form hehe
  let getStarsFromRatings = (rating = 3.9) => {
    let ratingRounded = Math.round(rating);
    let Stars = "";
    for (let i = 1; i <= ratingRounded; i++) {
      Stars += "⭐";
    }
    return Stars;
  };
  // for cart
  function handleCartClick(title, price, image) {
    let initialCart;
    if (localStorage.getItem("storecart")) {
      initialCart = JSON.parse(localStorage.getItem("storecart"))?.items || [];
    }

    console.log(initialCart);
    initialCart?.push({
      title,
      price,
      image,
    });
    localStorage.setItem("storecart", JSON.stringify({ items: initialCart }));
  }
  if (info.isLoading) return <LoadingSpinner />;
  if (info.isError)
    return (
      <h1 className="w-screen h-screen p-0 m-0 flex justify-center items-center text-5xl font-semibold">
        Error 😭...
      </h1>
    );
  return (
    <>
      <Link href={"/products"}>
        <h1 className="text-4xl cursor-pointer w-20 h-20 absolute text-white aspect-auto rounded-full bg-violet-400 flex justify-center items-center m-5">
          X
        </h1>{" "}
      </Link>
      <section className="flex min-h-screen flex-col md:flex-row">
        <div className="left flex-1">
          <div className="imgContainer object-contain flex justify-center items-center h-full ">
            <Image src={info.data.image} width={300} height={200} />
          </div>
        </div>
        <div className="right flex-1 flex flex-col">
          <h1 className="mb-4 mt-14 text-3xl text-center px-4 font-semibold ">
            {info.data.title}
          </h1>
          <p className="text-md text-gray-500 p-2 ">{info.data.description}</p>

          <div className="flex justify-between px-10">
            <h3 className="text-3xl text-orange-600  p-4 font-bold">
              ${info.data.price}
            </h3>
            <div className="ratings p-3">
              <span className="text-2xl p-3 h-4">
                {getStarsFromRatings(info.data.rating.rate)}
              </span>
              <span className="text-md p-3 h-4">
                ({info.data.rating.count})
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-1 pl-3 pt-3 mr-4 group cursor-pointer">
            <button className="bg-orange-400 h-10 grid items-center rounded-md w-full text-white hover:bg-orange-700 transition-all ">
              {" "}
              Buy Now
            </button>
            <svg
              onClick={() => {
                handleCartClick(
                  info.data.title,
                  info.data.price,
                  info.data.image
                );
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:opacity-50 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
