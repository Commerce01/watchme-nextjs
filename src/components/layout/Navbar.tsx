"use cilent";
import React, { useState } from "react";
import Image from "next/image";
import { BiCart, BiChevronDown, BiSearch, BiUser } from "react-icons/bi";
import Modal from "../Modal/Modal";
import Link from "next/link";



function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="mx-6 flex justify-between items-center">
      <div>
        <Image src="/assets/logo0.png" alt="Logo" width={170} height={50} />
      </div>
      <div className="flex space-x-8 text-gray-800 items-center font-semibold py-10">
        <div className="flex space-x-4 items-center">
          Shop <BiChevronDown />
        </div>
        <div>Most wanted</div>
        <div>New arrival</div>
        <div>Brands</div>
      </div>
      <div className="relative flex items-center space-x-2 w-[270px]">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full outline-none bg-gray-100 w-full"
        />
        <BiSearch className="absolute right-16" />

        <BiCart className="text-2xl " />
        {isOpen ? <Modal setOpen={setOpen}/> : null}
        <BiUser
          className="text-2xl "
          onClick={() => setOpen(true)}
        />
      </div>
    </div>
  );
}

export default Navbar;
