"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import clsx from "clsx";

const FooterForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .matches(/^@[aA-Za-z0-9_]{2,32}#[0-9]{4}$/, "Wrong discord")
      .required("Discord username is required"),
    walletAddress: Yup.string()
      .matches(/^1[xX]?[0-9a-zA-Z]{18}$/, "Wrong address")
      .required("Please enter your wallet address"),
  });

  const [isMinted, setIsMinted] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const handleSubmitForm = async (values) => {
    console.log("values:", values);
    reset();
    setIsMinted(true);
  };

  return (
    <form
      className={` flex flex-col gap-[16px] lg:gap-[24px] max-w-[248px] lg:max-w-[397px] mx-auto `}
      onSubmit={handleSubmit(async (data) => {
        handleSubmitForm(data);
      })}
    >
      <div>
        <div className="flex justify-center items-center">
          <div className="block  w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] rounded-l-[8px] !bg-[#1E1E1E] bg-[url('/images/discord_logo.svg')] bg-[length:16px_16px] lg:bg-[length:24px_124px] bg-no-repeat bg-center"></div>
          <input
            className={clsx(
              "border-solid border-[1px] h-[48px] lg:h-[64px] py-[17px] px-[24px] rounded-r-[8px] w-full bg-transparent font-messinaSansMono font-regular text-[12px] lg:text-[16px] !focus:bg-transparent focus:outline-none placeholder:text-[12px] lg:placeholder:text-[16px] uppercase",
              errors.username
                ? "border-[#DC3B5A] text-[#DC3B5A]"
                : "border-[#1E1E1E]"
            )}
            type="text"
            name="username"
            placeholder="@username"
            {...register("username")}
          />
        </div>
        {errors.username && (
          <p className="text-[#DC3B5A] mt-[2px] font-messinaSansMono font-regular text-[10px] leading-tight lg:text-[12px] uppercase text-right">
            {errors.username.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex justify-center items-center">
          <div className="block  w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] rounded-l-[8px] bg-[#1E1E1E] bg-[url('/images/fox.svg')] bg-[length:16px_16px] lg:bg-[length:24px_124px] bg-no-repeat bg-center"></div>
          <input
            className={clsx(
              "border-solid border-[1px] h-[48px] lg:h-[64px] py-[17px] px-[24px] rounded-r-[8px] w-full bg-transparent font-messinaSansMono font-regular text-[12px] lg:text-[16px] !focus:bg-transparent focus:outline-none placeholder:text-[12px] lg:placeholder:text-[16px] uppercase",
              errors.username
                ? "border-[#DC3B5A] text-[#DC3B5A]"
                : "border-[#1E1E1E]"
            )}
            type="text"
            name="walletAddress"
            placeholder="Wallet address"
            {...register("walletAddress")}
          />
        </div>
        {errors.walletAddress && (
          <p className="text-[#DC3B5A] mt-[2px] font-messinaSansMono font-regular text-[10px] leading-tight lg:text-[12px] uppercase text-right">
            {errors.walletAddress.message}
          </p>
        )}
      </div>

      <div className="">
        <button
          disabled={Object.keys(errors).length || isMinted}
          className={clsx(
            "btn cursor-pointer w-full flex flex-row justify-center items-center h-[41px] lg:h-[70px] text-[16px] lg:text-[29px]  rounded-[8px]  bg-[#DC3B5A] text-white hover:text-secondary transition-all duration-250 ease-in",
            "disabled:cursor-not-allowed disabled:hover:text-white"
          )}
          type="submit"
        >
          {Object.keys(errors).length ? "ERROR" : isMinted ? "MINTED" : "MINT"}
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
