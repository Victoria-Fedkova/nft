"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useRef, useState } from "react";
import Container from "./Container";

export default function ImgSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/slide-1.jpg",
    "/images/slide-01.jpg",
    "/images/slide-001.jpg",
    "/images/slide-2.jpg",
    "/images/slide-02.jpg",
    "/images/slide-002.jpg",
    "/images/slide-3.jpg",
    "/images/slide-4.jpg",
    "/images/slide-5.jpg",
    "/images/slide-6.jpg",
    "/images/slide-10.jpg",
    "/images/slide-11.jpg",
    "/images/slide-44.jpg",
    "/images/slide-33.jpg",
  ];
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,

    beforeChange: (_, newIndex) => {
      setCurrentSlide(newIndex);
    },

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef();

  const handleNext = () => {
    if (currentSlide < images.length - 1) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-auto md:w-[284px] lg:w-[240px] rounded-[24px] overflow-hidden "
          >
            <Image
              className="mx-auto object-cover w-full h-auto md:w-[284px] lg:w-[240px] rounded-[24px] overflow-hidden"
              src={image}
              alt={`Slide ${index}`}
              width={340}
              height={403}
            />
          </div>
        ))}
      </Slider>

      <div className="flex items-center justify-center gap-[48px] mt-[24px] lg:mt-[48px] disabled:text-secondary">
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
          className="font-biroScriptUSPlus font-regular leading-tight text-3xl disabled:text-secondary"
          onClick={handleNext}
          disabled={currentSlide === images.length - 1}
        >
          next
        </button>
      </div>
    </>
  );
}
