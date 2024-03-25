import Image from "next/image";
import clsx from "clsx";

const MindMapGrid = () => {
  return (
    <div className="hidden md:grid grid-cols-2 grid-flow-row gap-[24px]  ">
      <div className="group relative overflow-hidden flex min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#1E1E1E]">
        <div className="flex flex-col justify-between">
          <p className="font-messinaSansMono font-regular text-1xl leading-tight lg:text-3xl uppercase w-1/2 self-end">
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </p>
          <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase">
            YAPE DROP
          </h3>
        </div>
        <div className="absolute left-[0] right-[0] bottom-[-100%] opacity-0 group-hover:bottom-[0] group-hover:opacity-[1] flex flex-col justify-between min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#DC3B5A] transition-all duration-250 ease-in">
          <a className="cursor-pointer self-end">
            <Image
              className="object-contain"
              src="/images/Vector.svg"
              alt="arrow"
              width={64}
              height={64}
            />
          </a>
          <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase w-[60%]">
            Learn more in mind map
          </h3>
        </div>
      </div>
      <div className="group relative overflow-hidden flex min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#1E1E1E]">
        <div className="flex flex-col justify-between">
          <p className="font-messinaSansMono font-regular text-1xl leading-tight lg:text-3xl uppercase w-1/2 self-end">
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </p>
          <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase">
            New Collection
          </h3>
        </div>
        <div className="absolute left-[0] right-[0] bottom-[-100%] opacity-0 group-hover:bottom-[0] group-hover:opacity-[1] flex flex-col justify-between min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#DC3B5A] transition-all duration-250 ease-in">
          <a className="cursor-pointer self-end">
            <Image
              className="object-contain"
              src="/images/Vector.svg"
              alt="arrow"
              width={64}
              height={64}
            />
          </a>
          <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase w-[60%]">
            Learn more in mind map
          </h3>
        </div>
      </div>
      <div className="group relative overflow-hidden flex min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#1E1E1E]">
        <div className="flex flex-col justify-between">
          <p className="font-messinaSansMono font-regular text-1xl leading-tight lg:text-3xl uppercase w-1/2 self-end">
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </p>
          <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase">
            Token
          </h3>
        </div>
        <div className="absolute left-[0] right-[0] bottom-[-100%] opacity-0 group-hover:bottom-[0] group-hover:opacity-[1] flex flex-col justify-between min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#DC3B5A] transition-all duration-250 ease-in">
          <a className="cursor-pointer self-end">
            <Image
              className="object-contain"
              src="/images/Vector.svg"
              alt="arrow"
              width={64}
              height={64}
            />
          </a>
          <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase w-[60%]">
            Learn more in mind map
          </h3>
        </div>
      </div>

      <div className="flex flex-col justify-between min-h-[242px] lg:min-h-[480px] p-[24px] rounded-[24px] bg-[#DC3B5A]">
        <a className="flex cursor-pointer flex-grow">
          <div className="flex flex-col justify-between flex-grow">
            <Image
              className="object-contain self-end"
              src="/images/Vector.svg"
              alt="arrow"
              width={64}
              height={64}
            />
            <h3 className="font-right-grotesk font-bold leading-[1em] text-8xl lg:text-9xl uppercase w-[60%]">
              Learn more in mind map
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MindMapGrid;
