import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <header className="flex flex-row justify-between text-[#1E1E1E] max-w-[344px] md:max-w-[736px] lg:max-w-[1408px] mx-auto ">
      <Logo />
      <NavigationMenu />
    </header>
  );
};

export default Header;
