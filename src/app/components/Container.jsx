import clsx from "clsx";

const Container = function ({ children, isHero }) {
  return (
    <div
      className={clsx(
        "min-w-[216px] max-w-[480px] md:px-0 md:max-w-[592px] lg:max-w-[1032px] mx-auto ",
        isHero && " relative "
      )}
    >
      {children}
    </div>
  );
};

export default Container;
