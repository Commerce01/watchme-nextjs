"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { BiCartAdd } from "react-icons/bi";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <h2 className="text-4xl font-bold py-10"> Featured prodocts </h2>
      <Slider {...settings}>
        <div className="relative">
          <button className="absolute top-0 bg-red-700 px-3 py-2 rounded-lg text-2xl text-white">
            SALE
          </button>
          <Image src="/assets/PD1.webp" alt="PD" width={400} height={200} />
          <h2 className="font-bold ">
            Casestudi Ballistic Apple Watch (Green)
          </h2>
          <p className="flex justify-between items-center font-bold text-xl ">
            350 THB
            <button className="bg-black px-3 py-3 rounded-lg text-2xl mr-6">
              <BiCartAdd className="text-white" />
            </button>
          </p>
        </div>
        <div>
          <Image src="/assets/PD2.jpg" alt="PD" width={400} height={200} />
          <h2 className="font-bold ">New! Alpine nylon Apple Watch (Green)</h2>
          <p className=" flex justify-between items-center font-bold text-xl ">
            190 THB
            <button className="bg-black px-3 py-3 rounded-lg text-2xl mr-6">
              <BiCartAdd className="text-white" />
            </button>
          </p>
        </div>
        <div>
          <Image src="/assets/PD3.webp" alt="PD" width={400} height={200} />
          <h2 className="font-bold ">
            Casestudi Ballistic Apple Watch (Tricolor)
          </h2>
          <p className="flex justify-between items-center font-bold text-xl ">
            450 THB
            <button className="bg-black px-3 py-3 rounded-lg text-2xl mr-6">
              <BiCartAdd className="text-white" />
            </button>
          </p>
        </div>
        <div>
          <Image src="/assets/PD4.jpg" alt="PD" width={400} height={200} />
          <h2 className="font-bold ">Case Samsung Galaxy Watch 4 (Black)</h2>
          <p className="flex justify-between items-center font-bold text-xl ">
            200 THB
            <button className="bg-black px-3 py-3 rounded-lg text-2xl mr-6">
              <BiCartAdd className="text-white" />
            </button>
          </p>
        </div>
        <div>
          <Image src="/assets/PD5.jpg" alt="PD" width={400} height={200} />
          <h2 className="font-bold ">SUPCASE Samsung Galaxy Watch 4 (Black)</h2>
          <p className="flex justify-between items-center font-bold text-xl ">
            300 THB
            <button className="bg-black px-3 py-3 rounded-lg text-2xl mr-6">
              <BiCartAdd className="text-white" />
            </button>
          </p>
        </div>
        <div>
          <Image src="/assets/PD6.webp" alt="PD" width={400} height={200} />
          <h2 className="font-bold ">Samsung Galaxy Watch 5</h2>
          <p className="flex justify-between items-center font-bold text-xl ">
            10,300 THB
            <button className=" bg-black px-3 py-3 rounded-lg text-2xl mr-6">
              <BiCartAdd className="text-white" />
            </button>
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
