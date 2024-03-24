const Container = function ({ children }) {
  return (
    <div className="max-w-[360px] md:max-w-[768px] lg:max-w-[1280px] mx-auto px-[72px] md:px-[88px] lg:px-[124px]">
      {children}
    </div>
  );
};

export default Container;
