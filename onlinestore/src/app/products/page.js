"use client";
import ProductCard from "@/components/ProductCard";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import LoadingSpinner from "./../../components/LoadingSpinner";
import Link from "next/link";

const page = () => {
  let filteredProducts;
  //fetching data from api with React Query
  const queryClient = useQuery(["products"], () =>
    fetch("https://fakestoreapi.com/products").then((r) => r.json())
  );
  const queryReceiver = useQueryClient();
  // let products = queryReceiver.getQueryData(["products"]);
  //accessing the query
  let products = queryClient.data;
  const searchParams = useSearchParams();
  let query = searchParams.get("search");

  if (query) {
    filteredProducts = products?.filter(
      (product) => product.title.toLowerCase().includes(query.toLowerCase()) //for case insensivity
    );
  }
  console.log(query, filteredProducts, products);
  if (filteredProducts) products = filteredProducts;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-24 py-8 overflow-x-hidden ">
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
      {products && !products[0] && (
        <div className="h-screen w-screen flex flex-col items-center">
          <h1 className="text-md md:text-xl  text-red-700 text-center">
            No Products Found!! Try changing your keyword or
          </h1>
          <Link href="/products" className="flex justify-center">
            <button className="w-40 h-16 rounded-lg mx-auto bg-purple-600 m-6 text-white">
              Clear Your Search
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
