import Container from "../Container";
import css from "./StorySection.module.scss";
import { IoMdClose } from "react-icons/io";

const StorySection = () => {
  return (
    <>
      <Container>
        <div
          className={`${css.elementBg} md:grid md:grid-cols-2 md:grid-flow-row mt-[60px] md:mt-[80px] lg:mt-[107px] md:pb-[60px] lg:pb-[82px] md:gap-y-[68px] lg:gap-y-[56px] pb-[332px] md:pb-0`}
        >
          <h2 className="font-right-grotesk font-[900] text-balance md:leading-[60px] lg:leading-[120px] text-4xl md:text-11xl lg:text-12xl uppercase text-left mb-[16px] md:mb-0">
            a Story that started with
            <span className="ml-[3px] text-[#DC3B5A] lg:tracking-[-3px]">
              one simple <br className="md:hidden" />
              ape
            </span>
          </h2>
          <p className="font-messinaSansMono font-regular text-2xl leading-tight lg:text-3xl uppercase text-right mb-[36px] md:mb-0">
            WHO GOT <br className="md:hidden" /> FED UP WITH BORING <br />
            AND HYPOCRITIC COMMONPLACE <br className="sm:hidden md:inline" />
            THIS IS HOW THE IDEA OF <br />
            ESCAPING AND DYNAMIC <br />
            JOURNEY ON THE <br className="sm:hidden md:inline" />
            YACHT
          </p>
          <div className="flex items-center justify-center flex-col gap-[16px] md:gap-[24px] lg:gap-[36px] max-w-[216px] md:max-w-[397px] lg:max-w-[581px] mx-auto">
            <IoMdClose
              style={{
                color: "white",
                width: "36px",
                height: "36px",
              }}
            />
            <p className="font-messinaSansMono font-regular text-1xl md:text-2xl leading-tight lg:text-3xl uppercase text-center">
              Join the YACHT APE community to be one of the first to receive our
              limited edition NFT
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default StorySection;
