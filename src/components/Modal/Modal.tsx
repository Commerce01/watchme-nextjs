import { SettingsIcon } from "lucide-react";
import React from "react";
import { BiX } from "react-icons/bi";
import Image from "next/image";


interface IProps {
  setOpen: (bool: boolean) => void;
}

function Modal({ setOpen }: IProps) {
  return (
    <div className="modal">
      <div className="relative w-[500px] h-[400px] rounded-lg bg-white p-4">
        <BiX
          className="absolute top-1 right-1 cursor-pointer text-3xl"
          onClick={() => setOpen(false)}
        />
        <div>
          <p className="flex justify-center items-center text-3xl font-bold">
            watch me.
          </p>
          <p className="text-xs mt-2 ">
            need to <span className="font-bold">login</span> to access your account.
          </p>
          <div className=" mt-2 justify-center flex-col  ">
            <input
              type="text"
              placeholder="email"
              className="mt-3 p-3 rounded-lg outline-none bg-gray-300 w-full"
            />
            <input
              type="text"
              placeholder="password"
              className="mt-3 p-3 rounded-lg outline-none bg-gray-300 w-full"
            />
            <button className="mt-4 p-3 bg-gray-600 px-2 py-2 rounded-lg text-xl text-white w-full">
              Sign in
            </button>
            <div className="mt-2 text-xs">
              if yoy don&apos;t have an account <span className="mx-1 font-bold">Sing Up</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
