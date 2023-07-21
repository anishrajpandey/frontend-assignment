"use client";
import Herosection from "@/components/Herosection";
import Navbar from "../components/Navbar";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const queryClient = useQuery(["products"], () =>
    fetch("https://fakestoreapi.com/products").then((r) => r.json())
  );
  console.log(queryClient.data);
  return (
    <>
      <Herosection />
    </>
  );
};

export default page;
