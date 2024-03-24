"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdClose } from "react-icons/io";

export default function InfinityString() {
  const settings = {
    arrows: false,
    dots: false,
    infinity: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    useTransform: false,
    cssEase: "linear",
    edgeFriction: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
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

  return (
    <div className="bg-[#DC3B5A] py-[9px]">
      <Slider {...settings}>
        <div>
          <h2 className="font-right-grotesk font-bold leading-tini text-[20px] md:text-[36px] flex flex-row items-center  uppercase flex items-center justify-around flex-row ">
            Destroy stereotypes
            <IoMdClose
              className=" text-[20px] md:text-[36px]"
              style={{
                color: "white",
              }}
            />
          </h2>
        </div>

        <div>
          <h2 className="font-right-grotesk font-bold leading-tini text-[20px] md:text-[36px] flex flex-row items-center  uppercase flex items-center justify-around flex-row ">
            HAVE NO LIMITS
            <IoMdClose
              className=" text-[20px] md:text-[36px]"
              style={{
                color: "white",
              }}
            />
          </h2>
        </div>

        <div>
          <h2 className="font-right-grotesk font-bold leading-tini text-[20px] md:text-[36px] flex flex-row items-center  uppercase flex items-center justify-around flex-row ">
            Break rules
            <IoMdClose
              className=" text-[20px] md:text-[36px]"
              style={{
                color: "white",
              }}
            />
          </h2>
        </div>
      </Slider>
    </div>
  );
}
