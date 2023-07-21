"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const page = () => {
  //accessing the already fetched data
  const queryClient = useQueryClient();
  const products = queryClient.getQueryData(["products"]);
  //getting the search query
  const searchParams = useSearchParams();
  let query = searchParams.get("search");
  console.log(query);
  return (
    <div>
      {products &&
        products.map((product) => {
          return <div> {product.title} </div>;
        })}
    </div>
  );
};

export default page;
