import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className=" my-6 bg-gray-200 rounded-md px-3 py-3 ">
      <div className="mx-6 flex justify-between items-center">
        <div>
          <Image src="/assets/logo0.png" alt="Logo" width={170} height={50} />
        </div>
        <div className="font-bold  ">
          SHOP
          <p className=" font-normal py-3 ">
            Fashion
            <p className="py-3">Health </p>
            <p>Accessories</p>
          </p>
        </div>
        <div className="font-bold">
          COMPANY
          <p className=" font-normal py-3">
            About Us
            <p className="py-3">contact</p>
            <p>Affiliates</p>
          </p>
        </div>
        <div className="font-bold">
          SUPPORT
          <p className=" font-normal py-3">
            FAQs
            <p className="py-3">Cookie Policy </p>
            <p>Terms of Use</p>
          </p>
        </div>
        <div className="font-bold">
          PAYMENT METHODS
          <div className="py-3">
            <Image src="/assets/visa.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="py-2">
            <Image src="/assets/mastercard.png" alt="Logo" width={40} height={50} />
          </div>
          <div className="py-2">
            <Image src="/assets/PayPal.svg.png" alt="Logo" width={70} height={50} />
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        Copyright©2023 watch me.
      </div>
    </div>
  );
}

export default Footer;
