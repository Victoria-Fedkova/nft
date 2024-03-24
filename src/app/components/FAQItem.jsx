import Image from "next/image";
import clsx from "clsx";

const FAQItem = ({ img, title, text, num, isOpen, onClick }) => {
  return (
    <li
      className={clsx(
        "group item relative flex items-start justify-end gap-[24px] px-[12px] md:pl-[183px] lg:pl-[366px] py-[8px] lg:px-[24px] lg:py-[24px] transition-all duration-[250ms] ease-in max-h-auto last:mb-0",
        isOpen &&
          "rounded-[21px] bg-[#1E1E1E] mb-[8px] md:mb-[18px] lg:bm-[24px]"
        // : "mb-[16px] md:mb-[36px] lg:bm-[48px]"
      )}
    >
      <Image
        className={clsx(
          "md:absolute top-1/2 transform left-0 -translate-y-1/2 object-cover hidden md:block md:w-[148px] md:h-[183px] lg:w-[248px] lg:h-[282px] rounded-[16px] overflow-hidden transition-all duration-250 ease-in",
          isOpen
            ? "transform rotate-0 sm:rotate-0 md:rotate-[-16deg] lg:rotate-[-16deg] opacity-1"
            : "transform  opacity-0"
        )}
        src={img}
        alt="some photo"
        width={148}
        height={183}
      />
      <span
        className={clsx(
          "font-biroScriptUSPlus font-regular leading-[3em] text-1xl lg:text-[24px] tracking-[.5em] text-[#DC3B5A] group-hover:text-[white] transition-all duration-250 ease-in",
          isOpen && "text-[white]"
        )}
      >
        [{num}]
      </span>
      <div
        className={clsx(
          "flex flex-col transition-all duration-250 ease-in h-auto",
          isOpen && "gap-[10px] md:gap-[12px] lg:gap-[36px]"
        )}
      >
        <h3
          onClick={() => onClick()}
          className={clsx(
            "font-right-grotesk font-bold leading-[1em] text-7xl md:text-8xl lg:text-9xl uppercase group-hover:text-[#DC3B5A] transition-all duration-250 ease-in",
            isOpen && "text-[#DC3B5A]"
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "font-messinaSansMono font-regular text-1xl leading-tight lg:text-2xl uppercase transition-all duration-[250ms] ease-in",
            isOpen ? "max-h-auto" : "max-h-0 overflow-hidden"
          )}
        >
          {text}
        </p>
      </div>
    </li>
  );
};

export default FAQItem;
