import Link from "next/link";
import Somelogo from "../../../../../public/images/mainLogo.svg";

const Logo = ({ isMobile }) => {
  return (
    <div className="flex group hover:text-[#DC3B5A] w-[72px] h-[50px]">
      <Link
        href={"/"}
        scroll={false}
        className=" w-[72px] h-[50px] group-hover:text-[white] flex flex-row justify-center items-center text-[16px] lg:text-[29px] transition-all duration-250 ease-in"
      >
        <Somelogo fill="currentColor" />
      </Link>
    </div>
  );
};

export default Logo;
