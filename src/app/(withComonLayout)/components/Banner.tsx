"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { FaDiagramNext } from "react-icons/fa6";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

import laptop1 from "@/assets/laptop1.jpg";
import laptop2 from "@/assets/laptop2.jpg";
import laptop3 from "@/assets/laptop3.jpeg";
import laptop4 from "@/assets/laptop4.jpeg";
import Logo from "./Logo";

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
    { id: 1, img: laptop1 },
    { id: 2, img: laptop2 },
    { id: 3, img: laptop3 },
    { id: 4, img: laptop4 },
  ];

  return (
    <div>
      <div className="">
        <Logo height={70} width={70} />
      </div>
      <div className=" flex justify-center items-center max-w-lg gap-8">
        <button className="embla__prev" onClick={scrollPrev}>
          <FaArrowAltCircleLeft />
        </button>
        <div
          className="embla__viewport border w-full mx-auto h-56"
          ref={emblaRef}
        >
          <div className="embla__container h-full">
            {bannerImages.map((image) => (
              <div key={image.id} className="embla__slide">
                <Image
                  className="embla__slide"
                  src={image.img}
                  height={500}
                  width={500}
                  alt="next img"
                />
              </div>
            ))}
          </div>
        </div>

        <button className="embla__next" onClick={scrollNext}>
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
