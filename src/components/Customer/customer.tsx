"use client";
import React from "react";
import { BiDollarCircle, BiSmile, BiCartAdd, BiSend } from "react-icons/bi";

function Customer() {
  return (
    <div>
      <div className="font-bold text-4xl text-gray-800 py-10 flex justify-center items-center">
        <h1 className="w-[650px]">We provide best customer experiences</h1>
        <h1 className=" text-sm text-gray-500 border-black border-l py-5 pl-8  ">
          We ensure our customers have the best shopping experience
        </h1>
      </div>
      <div className=" grid grid-cols-4 gap-4 ">
        <div>
          <button className="bg-slate-200 px-4 py-4 rounded-lg  text-2xl">
            <BiDollarCircle />
          </button>
          <p className="font-bold text-xl py-4">Original Products</p>
          <p className="font-bold text-gray-400 text-sm">
            We providee money back guarantee if the product are not original
          </p>
        </div>
        <div>
          <button className="bg-slate-200 px-4 py-4 rounded-lg text-2xl">
            <BiSmile />
          </button>
          <p className="font-bold text-xl py-4">Satisfaction Guarantee </p>
          <p className="font-bold text-gray-400 text-sm">
            Exchange the product you`ve purchased if it doesn`t fit on you
          </p>
        </div>
        <div>
          <button className="bg-slate-200 px-4 py-4 rounded-lg text-2xl">
            <BiCartAdd />
          </button>
          <p className="font-bold text-xl py-4">New Arrival Everyday</p>
          <p className="font-bold text-gray-400 text-sm">
            We updates our collections almost every
          </p>
        </div>
        <div>
          <button className="bg-slate-200 px-4 py-4 rounded-lg text-2xl">
            <BiSend />
          </button>
          <p className="font-bold text-xl py-4">Fast & Free Shipping</p>
          <p className="font-bold text-gray-400 text-sm">
            We offer fast and free shipping for our loyal customers
          </p>
        </div>
      </div>
    </div>
  );
}

export default Customer;
