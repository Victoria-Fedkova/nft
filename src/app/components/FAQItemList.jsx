"use client";
import FAQItem from "./FAQItem";
import { useState } from "react";

const items = [
  {
    img: "/images/Maskgroup1.jpg",
    title: "WHAT IS AN NFT COLLECTION?",
    text: "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
    num: 1,
  },
  {
    img: "/images/Maskgroup2.jpg",
    title: "HOW DO I PURCHASE NFTS FROM A COLLECTION?",
    text: "To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.",
    num: 2,
  },
  {
    img: "/images/Maskgroup3.jpg",
    title: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?",
    text: "Yes, you can sell or trade NFTs from a collection like you would other digital assets.",
    num: 3,
  },
  {
    img: "/images/Maskgroup4.jpg",
    title: "WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?",
    text: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    num: 4,
  },
];

const FAQItemsList = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul>
      {items.map((item, index) => {
        const { img, title, text, num } = item;
        return (
          <FAQItem
            key={index}
            img={img}
            title={title}
            text={text}
            num={num}
            onClick={() => {
              handleToggle(index);
            }}
            isOpen={activeIndex === index}
          />
        );
      })}
    </ul>
  );
};

export default FAQItemsList;
