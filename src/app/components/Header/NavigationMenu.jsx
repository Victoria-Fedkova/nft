import Link from "next/link";
import clsx from "clsx";

import Disc from "../../../../public/images/discord.svg";
import Blue from "../../../../public/images/Blue.svg";
import Ex from "../../../../public/images/x.svg";

const NavigationMenu = ({ isOpen, setIsOpen }) => {
  return (
    <nav
      className={clsx(
        " z-[999] flex flex-col justify-end font-messinaSansMono font-regular text-[12px] leading-tight lg:text-[16px] uppercase text-center text-[white] md:text-[#1e1e1e]",
        isOpen
          ? " md:relative text-[white] md:text-[#1e1e1e]"
          : "relative text-[#1e1e1e]"
      )}
    >
      <div className="flex ">
        <div
          className={clsx(
            "flex md:flex-row md:static",
            "",
            isOpen
              ? "absolute md:static z-[2] flex-col gap-[16px] md:gap-[0] text-[24px] md:text-[12px] lg:text-[16px] justify-center items-center top-[-20px] left-[0px] right-[0px] bottom-[0px]  w-[480px] md:w-auto h-[100vh] md:h-[48px] lg:h-[80px] z-10 bg-[#181818] md:bg-transparent "
              : "static flex-row bg-transparent"
          )}
        >
          <div
            className={clsx(
              "group flex justify-center items-center  md:h-[48px] lg:h-[80px] bg-transparent md:bg-[#1E1E1E1A] md:rounded-l-[12px] overflow-hidden",
              isOpen ? "md:w-[48px] lg:w-[80px] " : "w-[0] lg:w-[0]"
            )}
          >
            <Link
              className="transition-all duration-250 easy-in  group-hover:text-[white] group-hover:underline"
              href={"#about"}
              onClick={() => setIsOpen()}
            >
              ABOUT
            </Link>
          </div>
          <div
            className={clsx(
              "group flex justify-center items-center  md:h-[48px] lg:h-[80px] md:bg-[#1E1E1E1A]  overflow-hidden",
              isOpen ? "md:w-[48px] lg:w-[80px]" : "w-[0] lg:w-[0]"
            )}
          >
            <Link
              className="transition-all duration-250 easy-in group-hover:text-[white] group-hover:underline"
              href={"#m-map"}
              onClick={() => setIsOpen()}
            >
              M-MAP
            </Link>
          </div>
          <div
            className={clsx(
              "group flex justify-center items-center  md:h-[48px] lg:h-[80px] md:bg-[#1E1E1E1A]  overflow-hidden",
              isOpen ? "md:w-[48px] lg:w-[80px]" : "w-[0] lg:w-[0]"
            )}
          >
            <Link
              className="transition-all duration-250 easy-in  group-hover:text-[white] group-hover:underline"
              href={"#faq"}
              onClick={() => setIsOpen()}
            >
              FAQ
            </Link>
          </div>
          <div
            className={clsx(
              "group flex justify-center items-center  md:h-[48px] lg:h-[80px] md:bg-[#1E1E1E1A]  overflow-hidden",
              isOpen ? "md:w-[48px] lg:w-[80px]" : "w-[0] lg:w-[0]"
            )}
          >
            <Link
              className="transition-all duration-250 easy-in group-hover:text-[white] group-hover:underline"
              href={"#arts"}
              onClick={() => setIsOpen()}
            >
              ARTS
            </Link>
          </div>
          <div
            className={clsx(
              "group flex justify-center items-center  md:h-[48px] lg:h-[80px] md:bg-[#1E1E1E1A]  overflow-hidden",
              isOpen ? "md:w-[48px] lg:w-[80px]" : "w-[0] lg:w-[0]"
            )}
          >
            <Link
              className={clsx(
                "transition-all duration-250 easy-in group-hover:text-[white] group-hover:underline"
              )}
              href={"#mint"}
              onClick={() => setIsOpen(false)}
            >
              MINT
            </Link>
          </div>
          <p
            className={clsx(
              isOpen
                ? "absolute bottom-[0] z-[999] block md:hidden text-[white] max-w-[216px] font-messinaSansMono font-regular text-1xl leading-tight uppercase text-center"
                : "hidden"
            )}
          >
            © Yacht ape 2024 all rights reserved
          </p>
        </div>
        <button
          className={clsx(
            "relative z-[999] flex justify-center items-center w-[48px] lg:w-[80px] h-[48px] lg:h-[80px] bg-[#1E1E1E1A]  mb-[8px] lg:mb-[16px] rounded-r-[8px] md:rounded-r-[12px]",
            isOpen
              ? "bg-[#FFFFFF1A] md:bg-[#1E1E1E1A] rounded-l-[8px] md:rounded-l-[0] hover:text-[#DC3B5A] md:hover:text-[white]"
              : " rounded-l-[8px] md:rounded-l-[12px] bg-[#1E1E1E1A] hover:text-[white] text-[#1E1E1E]",
            "transition-all duration-250 easy-in hover:underline"
          )}
          onClick={() => setIsOpen()}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>
      <ul
        className={clsx(
          "relative z-[999] flex flex-col items-end gap-[8px] lg:gap-[16px] text-[#1e1e1e]"
        )}
      >
        <li
          className={clsx(
            "flex justify-center items-center w-[48px] lg:w-[80px] h-[48px] lg:h-[80px]  rounded-[8px] md:rounded-[12px] group ",
            isOpen
              ? "bg-[#FFFFFF1A] md:bg-[#1E1E1E1A] text-[white] md:text-[#1E1E1E] hover:text-[#DC3B5A] md:hover:text-[white]"
              : "bg-[#1E1E1E1A] hover:text-[white]"
          )}
        >
          <Link href={"/"}>
            <Disc
              fill="currentColor"
              width={"16px"}
              height={"auto"}
              className=" lg:w-[24px] lg:h-[24px]"
            />
          </Link>
        </li>
        <li
          className={clsx(
            "flex justify-center items-center w-[48px] lg:w-[80px] h-[48px] lg:h-[80px]  rounded-[8px] md:rounded-[12px] group ",
            isOpen
              ? "bg-[#FFFFFF1A] md:bg-[#1E1E1E1A] text-[white] md:text-[#1E1E1E] hover:text-[#DC3B5A] md:hover:text-[white]"
              : "bg-[#1E1E1E1A] hover:text-[white]"
          )}
        >
          <Link href={"/"}>
            <Blue
              fill="currentColor"
              width={"16px"}
              height={"auto"}
              className=" lg:w-[24px] lg:h-[24px]"
            />
          </Link>
        </li>
        <li
          className={clsx(
            "flex justify-center items-center w-[48px] lg:w-[80px] h-[48px] lg:h-[80px]  rounded-[8px] md:rounded-[12px] group ",
            isOpen
              ? "bg-[#FFFFFF1A] md:bg-[#1E1E1E1A] text-[white] md:text-[#1E1E1E] hover:text-[#DC3B5A] md:hover:text-[white]"
              : "bg-[#1E1E1E1A] hover:text-[white]"
          )}
        >
          <Link href={"/"}>
            <Ex
              fill="currentColor"
              width={"16px"}
              height={"auto"}
              className=" lg:w-[24px] lg:h-[24px]"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
