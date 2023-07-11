"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

interface ICarousel {
  id: number;
  title: string;
  img: string;
}

function CarouselComponents() {
  const imgList: ICarousel[] = [
    {
      id: 1,
      title: "Banner 1",
      img: "/assets/watch2.webp",
    },
    {
      id: 2,
      title: "Banner 2",
      img: "/assets/watch6.jpg",
    },
    {
      id: 3,
      title: "Banner 3",
      img: "/assets/watch3.webp",
    },
    {
      id: 4,
      title: "Banner 4",
      img: "/assets/watch0.jpg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Carousel infiniteLoop={true} useKeyboardArrows={true} showThumbs={false}>
        {imgList.map((item: ICarousel) => {
          return (
            <div key={item.id}>
              <Image
                src={item.img}
                alt={item.title}
                width={1600}
                height={800}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponents;
