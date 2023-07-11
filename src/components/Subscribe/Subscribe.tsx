"use client";
import React from "react";

function Subscribe() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <p className="text-[40px] font-bold ">
          Subscrible to our newsletter to get updates
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[40px] font-bold ">to our latest collections</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-400 text-[20px] font-bold ">
          Get 20% off your order just by subscribing to our newsletter
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative flex w-full max-w-sm items-center space-x-2 py-5 ">
          <input
            type="email"
            placeholder="Email your email"
            className="px-4 py-3 rounded-lg outline-none bg-gray-100 w-full"
          />
          <button
            type="submit"
            className="bg-black px-3 py-3 rounded-lg text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-gray-400 ">
          you will be able to unsubscribe any time
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-gray-400 ">
          Read our Privacy Policy
          <span className="underline font-bold text-black">here</span>
        </h1>
      </div>
    </div>
  );
}

export default Subscribe;
