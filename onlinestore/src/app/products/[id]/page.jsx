"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import Link from "next/link";

const page = () => {
  const path = usePathname();
  const id = path.split("/").at(-1); // getting the respective id of the product from the url

  // fetching single information based on id
  const info = useQuery(["products", "id"], () =>
    fetch(`https://fakestoreapi.com/products/${id}`).then((r) => r.json())
  );
  console.log(info.data);

  if (info.isLoading)
    return (
      <h1 className="w-screen h-screen p-0 m-0 flex justify-center items-center text-5xl font-semibold">
        LOADING 🥱...
      </h1>
    );
  if (info.isError)
    return (
      <h1 className="w-screen h-screen p-0 m-0 flex justify-center items-center text-5xl font-semibold">
        Error 😭...
      </h1>
    );
  return (
    <>
      :
      <Link href={"/products"}>
        <h1 className="text-5xl cursor-pointer w-20 text-white aspect-auto rounded-full bg-violet-400 flex justify-center items-center m-5">
          ←
        </h1>{" "}
      </Link>
      <section className="flex">
        <div className="left flex-1">
          <div className="imgContainer">
            <Image src={info.data.image} width={400} height={400} />
          </div>
        </div>
        <div className="right flex-1"></div>
        {info.data.title}
      </section>
    </>
  );
};

export default page;
