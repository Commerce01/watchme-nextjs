import Carousel from "@/components/Carousel/carousel";
import Image from "next/image";
import Brand from "@/components/Brands/brand";
import Customer from "@/components/Customer/customer";
import MultipleItems from "@/components/MultipleItems/multipleItems";
import { BiMedal, BiRun, BiCheese, BiMeteor, BiPlay } from "react-icons/bi";
import Subscrib from "@/components/Subscribe/Subscribe";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Carousel />
      <div>
        <Brand />
      </div>
      <div>
        <Customer />
      </div>
      <div>
        <h1 className="font-bold text-4xl py-10">Currated</h1>
        <div className=" grid grid-cols-4 gap-4 ">
          <div>
            <Image src="/assets/CRT1.jpg" alt="CRT" width={350} height={300} />
            <p className=" flex justify-between items-center bg-gray-500 px-4 py-2 rounded-lg text-2xl text-white">
              Best Seller
              <BiMedal />
            </p>
          </div>
          <div>
            <Image src="/assets/CRT2.webp" alt="CRT" width={350} height={300} />
            <p className="flex justify-between items-center bg-gray-400 px-4 py-2 rounded-lg text-2xl text-white">
              fashion
              <BiCheese />
            </p>
          </div>
          <div>
            <Image src="/assets/CRT3.jpg" alt="CRT" width={350} height={300} />
            <p className="flex justify-between items-center bg-gray-400 px-4 py-2 rounded-lg text-2xl text-white">
              health
              <BiRun />
            </p>
          </div>
          <div>
            <Image src="/assets/CRT4.jpg" alt="CRT" width={350} height={300} />
            <p className="flex justify-between items-center bg-gray-400 px-4 py-2 rounded-lg text-2xl text-white">
              Accessories
              <BiMeteor />
            </p>
          </div>
        </div>
      </div>
      <div>
        <MultipleItems />
      </div>
      <div>
        <div className=" relative mx-2 flex items-center space-x-10 py-12  ">
          <Image src="/assets/BN2.jpg" alt="BN" width={1200} height={300} />
          <div className="absolute">
            <h1 className="text-[15px] font-bold  text-white drop-shadow-xl">
              LIMITED OFFER
            </h1>
            <h1 className="text-[50px] font-bold  text-white drop-shadow-xl">
              35% Off only this friday
            </h1>
            <h1 className="text-[50px] font-bold text-white  drop-shadow-xl">
              and get special gift
            </h1>
            <div className="py-5">
              <button className=" bg-gray-400 px-2 py-2 rounded-lg text-3xl text-white flex justify-between items-center">
                Grab it now
                <BiPlay />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Subscrib />
      </div>
    </div>
  );
}
