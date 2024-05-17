"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { FaDiagramNext } from "react-icons/fa6";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

import laptop1 from "@/assets/laptop1.jpg";
import laptop2 from "@/assets/laptop2.jpg";
import laptop3 from "@/assets/laptop3.jpg";
import laptop4 from "@/assets/laptop4.jpg";
import Logo from "../Logo";

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const bannerImages = [
    { id: 1, img: laptop1, name: "Mac book pro 2023" },
    { id: 2, img: laptop2, name: "Asus Zenbook 2024" },
    { id: 3, img: laptop3, name: "Asus Trough 2022" },
    { id: 4, img: laptop4, name: "Samsung pro 2023" },
  ];

  return (
    <div className="flex justify-between items-center h-screen max-h-[700px] ">
      <div className="px-10 ">
        <Logo height={100} width={100} text="text-5xl" />
        <h1 className="text-2xl text-gray-500 font-light pt-4 pb-2">
          Why You trust <span className="font-semibold">Lapti.js</span>, Our
          Fair Service
        </h1>
        <p className="text-justify text-gray-600 font-extralight">
          Discover the latest in cutting-edge laptops at our shop. From
          high-performance gaming rigs to sleek ultrabooks, we offer top brands
          and models to suit every need. Experience exceptional quality,
          innovative technology, and unbeatable prices. Shop now and elevate
          your computing experience!
        </p>
        <div className="flex justify-center mt-8">
          <button className="btn bg-sky-500 text-white hover:bg-sky-600 transition-all">
            All Products
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center max-w-[800px] gap-8 ">
        <button
          className="embla__prev  text-2xl text-sky-500 hover:text-sky-600 transition-all"
          onClick={scrollPrev}
        >
          <FaArrowAltCircleLeft />
        </button>
        <div
          className="embla__viewport border w-full mx-auto rounded-md"
          ref={emblaRef}
        >
          <div className="embla__container h-full">
            {bannerImages.map((image) => (
              <div key={image.id} className="embla__slide">
                <Image
                  className="embla__slide"
                  src={image.img}
                  height={800}
                  width={800}
                  alt="next img"
                />
                <h1 className="bg-gray-700 py-4 text-sky-500 text-opacity-60 font-semibold text-center">
                  {image.name}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <button
          className="embla__next text-2xl text-sky-500 hover:text-sky-600 transition-all"
          onClick={scrollNext}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
