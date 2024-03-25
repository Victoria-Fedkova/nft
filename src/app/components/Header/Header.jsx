import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <header className="absolute right-0 left-0 top-[62px] md:top-[66px] lg:top-[40px] z-20 flex flex-row justify-between text-[#1E1E1E] max-w-[344px] md:max-w-[736px] lg:max-w-[1408px] mx-auto px-[8px]  md:px-[12px] lg:px-[96px]">
      <Logo />
      <NavigationMenu />
    </header>
  );
};

export default Header;
