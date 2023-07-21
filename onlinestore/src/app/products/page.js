"use client";
import ProductCard from "@/components/ProductCard";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const page = () => {
  let filteredProducts;
  //fetching data from api with React Query
  const queryClient = useQuery(["products"], () =>
    fetch("https://fakestoreapi.com/products").then((r) => r.json())
  );
  const queryReceiver = useQueryClient();
  let products = queryReceiver.getQueryData(["products"]);
  //accessing the query

  const searchParams = useSearchParams();
  let query = searchParams.get("search");
  console.log(query);
  if (query) {
    filteredProducts = products?.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  if (filteredProducts) products = filteredProducts;
  // console.log(filteredProducts, products);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-24  py-8 ">
      {queryClient.isLoading && (
        <h1 className="w-screen h-screen p-0 m-0 flex justify-center items-center text-5xl font-semibold">
          LOADING...
        </h1>
      )}
      {products &&
        products.map((product) => {
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
};

export default page;
