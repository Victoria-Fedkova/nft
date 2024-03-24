import Link from "next/link";

const NavigationMenu = () => {
  return (
    <nav className="flex">
      <div className="flex flex-row ">
        <ul className="flex flex-row ">
          <li>
            <Link href={"#about"}>ABOUT</Link>
          </li>
          <li>
            <Link href={"#m-map"}> M-MAP</Link>
          </li>
          <li>
            <Link href={"#faq"}> FAQ</Link>
          </li>
          <li>
            <Link href={"#arts"}> ARTS</Link>
          </li>
          <li>
            <Link href={"#mint"}> MINT</Link>
          </li>
        </ul>
        <button></button>
      </div>
      <ul>
        <li>
          <Link href={"/"}>
            <svg fill={"currentColor"} width={"24px"} height={"24px"}>
              <use href={"/images/discord.svg"} />
            </svg>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <svg fill={"currentColor"} width={"24px"} height={"24px"}>
              <use href={"/images/Blue.svg"} />
            </svg>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <svg fill={"currentColor"} width={"24px"} height={"24px"}>
              <use href={"/public/images/Blue.svg"} />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
