import Container from "./Container";

import { IoMdClose } from "react-icons/io";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer id="mint" className="mt-[60px] md:mt-[80px] lg:mt-[120px]">
      <Container>
        <h2 className="font-right-grotesk font-bold leading-tini text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-6 md:mb-10 lg:mb-20">
          Are you in?
        </h2>
        <div className="flex items-center justify-center flex-col gap-2.5 max-w-[216px] md:max-w-[397px] lg:max-w-[581px] mx-auto">
          <IoMdClose
            style={{
              color: "white",
              width: "36px",
              height: "36px",
            }}
          />
          <p className="font-messinaSansMono font-regular text-2xl leading-tight lg:text-3xl uppercase text-center mb-[16px] md:mb-[24px] lg:mb-[40px]">
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </p>
        </div>
        <FooterForm />
        <p className="font-messinaSansMono font-regular text-1xl leading-tight lg:text-2xl uppercase text-center mt-[60px] md:mt-[80px] lg:mt-[120px] mb-[424px] md:mb-[40px]">
          © Yacht ape 2024 all rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
