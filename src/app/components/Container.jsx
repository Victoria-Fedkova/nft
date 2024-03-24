import clsx from "clsx";

const Container = function ({ children, isHero }) {
  return (
    <div
      className={clsx(
        "max-w-[216px] md:max-w-[592px] lg:max-w-[1280px] mx-auto ",
        isHero && " relative "
      )}
    >
      {children}
    </div>
  );
};

export default Container;
