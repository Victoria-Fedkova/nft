"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useRef, useState } from "react";

export default function MindMapSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    // speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (_, newIndex) => {
      setCurrentSlide(newIndex + 1);
    },
  };

  const sliderRef = useRef();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="block md:hidden">
      <Slider {...settings} ref={sliderRef}>
        <div
          className="group relative overflow-hidden flex min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#1E1E1E]"
          style={{ display: "flex !important", flexGrow: "1" }}
        >
          <div
            className="flex flex-grow"
            style={{ display: "flex !important", flexGrow: "1" }}
          >
            <div
              className="flex flex-col justify-between flex-grow my-auto"
              style={{ display: "flex !important", flexGrow: "1" }}
            >
              <p className="font-messinaSansMono font-regular text-1xl leading-tight lg:text-3xl uppercase w-1/2 self-end">
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </p>
              <h3 className="flex font-right-grotesk font-bold leading-[2em] text-8xl lg:text-9xl uppercase">
                YAPE DROP
              </h3>
            </div>
          </div>
          <div className="absolute left-[0] right-[0] bottom-[-100%] opacity-0 group-hover:bottom-[0] group-hover:opacity-[1] flex flex-col justify-between min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#DC3B5A] transition-all duration-250 ease-in">
            <a className="cursor-pointer self-end">
              <Image
                className="object-contain"
                src="/images/Vector.svg"
                alt="arrow"
                width={64}
                height={64}
              />
            </a>
            <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase w-[60%]">
              Learn more in mind map
            </h3>
          </div>
        </div>
        <div className="group relative overflow-hidden flex min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#1E1E1E]">
          <div className="flex flex-col justify-between">
            <p className="font-messinaSansMono font-regular text-1xl leading-tight lg:text-3xl uppercase w-1/2 self-end">
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </p>
            <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase">
              New Collection
            </h3>
          </div>
          <div className="absolute left-[0] right-[0] bottom-[-100%] opacity-0 group-hover:bottom-[0] group-hover:opacity-[1] flex flex-col justify-between min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#DC3B5A] transition-all duration-250 ease-in">
            <a className="cursor-pointer self-end">
              <Image
                className="object-contain"
                src="/images/Vector.svg"
                alt="arrow"
                width={64}
                height={64}
              />
            </a>
            <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase w-[60%]">
              Learn more in mind map
            </h3>
          </div>
        </div>
        <div className="group relative overflow-hidden flex min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#1E1E1E]">
          <div className="flex flex-col justify-between">
            <p className="font-messinaSansMono font-regular text-1xl leading-tight lg:text-3xl uppercase w-1/2 self-end">
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase">
              Token
            </h3>
          </div>
          <div className="absolute left-[0] right-[0] bottom-[-100%] opacity-0 group-hover:bottom-[0] group-hover:opacity-[1] flex flex-col justify-between min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#DC3B5A] transition-all duration-250 ease-in">
            <a className="cursor-pointer self-end">
              <Image
                className="object-contain"
                src="/images/Vector.svg"
                alt="arrow"
                width={64}
                height={64}
              />
            </a>
            <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase w-[60%]">
              Learn more in mind map
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#DC3B5A]">
          <a className="cursor-pointer ">
            <div className="flex flex-col justify-between ">
              <Image
                className="object-contain self-end"
                src="/images/Vector.svg"
                alt="arrow"
                width={64}
                height={64}
              />
              <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase w-[60%]">
                Learn more in mind map
              </h3>
            </div>
          </a>
        </div>
      </Slider>

      <div className="flex items-center justify-center gap-[48px] mt-[24px] lg:mt-[48px]">
        <button
          type="button"
          className="font-biroScriptUSPlus font-regular leading-tight text-3xl"
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          prev
        </button>

        <button
          type="button"
          className="font-biroScriptUSPlus font-regular leading-tight text-3xl"
          onClick={handleNext}
          disabled={currentSlide === 4}
        >
          next
        </button>
      </div>
    </div>
  );
}
