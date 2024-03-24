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
    slidesToShow: 4,
    slidesToScroll: 1,
    useTransform: false,
    cssEase: "linear",
    edgeFriction: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
  };

  return (
    <div className="bg-[#DC3B5A] py-[9px]">
      <Slider {...settings}>
        <h2 className="font-right-grotesk font-bold leading-tini text-10xl flex flex-row gap-[36px] uppercase text-center ">
          Destroy stereotypes
        </h2>
        <IoMdClose
          className="text-[36px]"
          style={{
            color: "white",
          }}
        />
        <h2 className="font-right-grotesk font-bold leading-tini text-10xl flex flex-row gap-[36px] uppercase text-center ">
          HAVE NO LIMITS
        </h2>
        <IoMdClose
          className="text-[36px]"
          style={{
            color: "white",
          }}
        />
        <h2 className="font-right-grotesk font-bold leading-tini text-10xl flex flex-row gap-[36px] uppercase text-center ">
          Break rules
        </h2>
        <IoMdClose
          className="text-[36px]"
          style={{
            color: "white",
          }}
        />
      </Slider>
    </div>
  );
}
