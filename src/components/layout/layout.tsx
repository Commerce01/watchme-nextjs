"use client";
import React, { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BiX } from "react-icons/bi";

interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps) {
  const [isOpen, setIsopen] = useState(true);
  return (
    <>
      <div className="bg-gray-800">
        <div
          className={
            isOpen
              ? "relative w-[1200px] mx-auto text-white flex justify-center items-start space-x-4 text-xs p-2"
              : "hidden"
          }
        >
          <h1>
            Sign up and <span className="font-bold">GET 20%</span> OF for your
            first order.
          </h1>
          <h1 className="underline font-bold">Sign up now</h1>
          <BiX
            onClick={() => setIsopen(!isOpen)}
            className="absolute right-0 text-xl"
          />
        </div>
      </div>
      <div className="w-[1200px] mx-auto">
        <Navbar />
        {children}

        <Footer />
      </div>
    </>
  );
}

export default Layout;
