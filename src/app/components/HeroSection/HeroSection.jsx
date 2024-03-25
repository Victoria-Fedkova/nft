import Container from "../Container";
import css from "./HeroSection.module.scss";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className={`${css.elementBg} relative flex flex-col text-[#1E1E1E] max-w-[480px] md:max-w-[736px] lg:max-w-[1408px]  rounded-[24px] bg-[#DC3B5A] pt-[8px] md:pt-[12px] lg:pt-[24px] pb-[19px] md:pb-[35px] lg:pb-[81px] min-h-[546px] md:min-h-[421px] lg:min-h-[720px] mx-auto`}
    >
      <div className={`flex flex-col justify-between md:justify-end flex-grow`}>
        <div className="mt-[28px] md:mt-0 md:mb-[115px] lg:mb-[145px]">
          <Container isHero>
            <div className="lg:max-w-[1019px] mx-auto ">
              <h3 className="font-biroScriptUSPlus font-regular leading-tight text-2xl md:text-7xl lg:text-3xl text-center md:text-left">
                diD yOu seE iT ?
              </h3>
              <h2 className="flex items-center justify-center gap-[5px] md:gap-[0] md:justify-between  font-right-grotesk font-[900] leading-[44px] md:leading-[60px] lg:leading-[164px] text-[44px] md:text-[92px] lg:text-[164px] uppercase text-left mb-[8px] md:mb-[16px] lg:mb-[30px]">
                <span className="">YACHT</span>
                <span className="">APES</span>
              </h2>
              <h3 className="font-biroScriptUSPlus font-regular leading-tight text-2xl md:text-7xl lg:text-3xl text-center md:text-left lg:ml-[120px]">
                Apes aRe eveRywhere
              </h3>
            </div>
            <div className="absolute  md:right-[0px] lg:right-[0px] bottom-[-369px] md:bottom-[-90%] lg:bottom-[-50%] ml-auto md:mr-0 flex items-center justify-center flex-col md:flex-col-reverse gap-[12px] md:gap-[16px] lg:gap-[28px] max-w-[340px] md:max-w-[190px] lg:max-w-[337px] ">
              <Link
                href={"#mint"}
                className="btn w-full  flex flex-row justify-center items-center h-[41px] lg:h-[70px] text-[#1E1E1E] hover:text-[white] text-[16px] lg:text-[29px] bg-[#1E1E1E1A] backdrop-blur-[6px] rounded-[8px] transition-all duration-250 ease-in"
              >
                MEET APES
              </Link>
              <p
                className={`${css.firstWord} font-messinaSansMono font-regular text-[12px] leading-tight lg:text-[16px] uppercase text-center md:text-justify`}
              >
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
