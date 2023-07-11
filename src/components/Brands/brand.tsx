"use client";
import React from "react";
import Image from "next/image";

function Brand() {
  return (
    <div className="font-bold text-4xl  text-gray-800 py-10">
      <h1>Brands</h1>
      <div className=" flex justify-between items-center">
        <Image src="/assets/b1apple.png" alt="Logo" width={150} height={50} />
        <Image src="/assets/b2Galaxy.png" alt="Logo" width={150} height={50} />
        <Image src="/assets/b3amazfit.png" alt="Logo" width={170} height={50} />
        <Image src="/assets/b4Garmin.png" alt="Logo" width={100} height={50} />
        <Image src="/assets/b5Realme.png" alt="Logo" width={150} height={50} />
        <Image src="/assets/b6oppo.png" alt="Logo" width={100} height={50} />
        <Image src="/assets/b7Huawei.png" alt="Logo" width={100} height={50} />
        <Image src="/assets/b8Xiaomi.png" alt="Logo" width={50} height={50} />
      </div>
    </div>
  );
}

export default Brand;
