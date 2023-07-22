"use client";
import Herosection from "@/components/Herosection";

import React from "react";
import ProductCard from "@/components/ProductCard";
import { useQueryClient, useQuery } from "@tanstack/react-query";

import LoadingSpinner from "./../components/LoadingSpinner";

const page = () => {
  return (
    <>
      <Herosection />
      <h1 className="mb-4 mt-10 text-5xl px-16 text-center text-purple-600 font-semibold">
        Our Products
      </h1>
      <Products />
    </>
  );
};

function Products() {
  //fetching data from api with React Query
  const queryClient = useQuery(["products"], () =>
    fetch("https://fakestoreapi.com/products").then((r) => r.json())
  );
  const queryReceiver = useQueryClient();
  let products = queryReceiver.getQueryData(["products"]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-24  py-8 ">
      {queryClient.isLoading && (
        <>
          <LoadingSpinner />
        </>
      )}
      {queryClient.isError && (
        <h1 className="w-screen h-screen p-0 m-0 flex justify-center items-center text-5xl font-semibold">
          Error 😔...
        </h1>
      )}
      {products &&
        products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              rate={product.rating.rate}
              count={product.rating.count}
              {...product}
            />
          );
        })}
    </div>
  );
}

export default page;
