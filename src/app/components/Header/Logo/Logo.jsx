import Link from "next/link";
import Somelogo from "../../../../../public/images/mainLogo.svg";

const Logo = () => {
  return (
    <div className="flex group hover:text-[white] w-[48px] h-[32px] lg:w-[72px] lg:h-[50px]">
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
