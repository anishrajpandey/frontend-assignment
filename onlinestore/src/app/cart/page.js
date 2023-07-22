"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    let carts;
    if (localStorage.getItem("storecart")) {
      carts = JSON.parse(localStorage.getItem("storecart")).items;
    }

    setCartItems(carts);
    console.log(cartItems);
  }, []);
  function clearCart() {
    localStorage.setItem("storecart", "");
    window.location = "/";
  }
  return (
    <main>
      <h1 className="text-4xl font-semibold text-center">Your Cart Items</h1>
      {cartItems &&
        cartItems.map(({ title, image, price }) => (
          <div class="w-screen rounded shadow-lg my-4 flex px-16 py-4 justify-center">
            <Image
              class="w-13"
              src={image || "/unavailable-image.jpg"}
              width={200}
              height={200}
              alt="unable to load photo"
            />
            <div class="px-6 py-4 flex justify-center flex-col ">
              <div class="font-bold text-3xl my-4 max-w-md">{title}</div>
              <div class="font-bold text-3xl my-4 text-green-700">${price}</div>
              <button className="bg-orange-400 w-64 h-10 p-6 flex justify-center items-center rounded-md text-white hover:bg-orange-700 transition-all ">
                Proceed To Checkout
              </button>
            </div>
          </div>
        ))}
      {!cartItems && (
        <p className="text-center  h-screen flex items-center justify-center">
          There are no items in your cart
        </p>
      )}
      <button
        onClick={clearCart}
        className="bg-red-400 h-10 p-6 flex justify-center items-center rounded-md w-full  text-white hover:bg-red-700 transition-all "
      >
        Clear Cart
      </button>
    </main>
  );
};

export default page;
