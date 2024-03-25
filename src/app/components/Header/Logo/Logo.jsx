import Link from "next/link";
import Somelogo from "../../../../../public/images/mainLogo.svg";
import clsx from "clsx";

const Logo = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={clsx(
        "relative z-[1000] flex group w-[48px] h-[32px] lg:w-[72px] lg:h-[50px]",
        isOpen
          ? "text-[white] md:text-[#1e1e1e] hover:text-[#DC3B5A] md:hover:text-[white]"
          : "hover:text-[white]"
      )}
    >
      <Link
        href={"/"}
        scroll={false}
        // className="  group-hover:text-[white] flex flex-row justify-center items-center text-[16px] lg:text-[29px] transition-all duration-250 ease-in"
      >
        <Somelogo
          fill="currentColor"
          width={"48px"}
          height={"auto"}
          className="lg:w-[72px] lg:h-[50px]"
        />
      </Link>
    </div>
  );
};

export default Logo;
