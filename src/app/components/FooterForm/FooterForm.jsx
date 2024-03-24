"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect, useState } from "react";

const FooterForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .matches(/^@[aA-Za-z0-9_]{2,32}#[0-9]{4}$/, "Wrong discord")
      .required("Discord username is required"),
    walletAddress: Yup.string()
      .matches(/^1[xX]?[0-9a-zA-Z]{18}$/, "Wrong address")
      .required("Please enter your wallet address"),
  });

  const [result, setResult] = useState("MINT");
  const [isMinted, setIsMinted] = useState(false);
  const [inputValues, setInputValues] = useState({
    username: "",
    walletAddress: "",
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  console.log("errors:", errors);
  useEffect(() => {
    if (
      (errors &&
        typeof errors === "object" &&
        errors.hasOwnProperty("username")) ||
      errors.hasOwnProperty("walletAddress")
    ) {
      setResult("ERROR");
    }
  }, [errors]);

  const handleSubmitForm = async (values) => {
    reset();
    setIsMinted(true);
  };

  const handleInputChange = (e) => {
    console.log("handle");
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form
      className=""
      onSubmit={handleSubmit(async (data) => {
        handleSubmitForm(data);
      })}
    >
      <div className="">
        <input
          className=""
          type="text"
          name="username"
          placeholder="@username"
          // value={inputValues.username}
          onChange={() => {
            handleInputChange();
          }}
          {...register("username")}
        />
        {errors.username && <p className="">{errors.username.message}</p>}
      </div>

      <div className="">
        <input
          className=""
          type="text"
          name="walletAddress"
          placeholder="Wallet address"
          value={inputValues.walletAddress}
          onChange={() => {
            handleInputChange();
          }}
          {...register("walletAddress")}
        />
        {errors.walletAddress && (
          <p className="">{errors.walletAddress.message}</p>
        )}
      </div>

      <div className="">
        <button
          className="btn w-full flex items-center justify-center h-[70px] rounded-[12px]  bg-[#DC3B5A] text-white hover:text-secondary transition-all duration-250 ease-in"
          type="submit"
        >
          {isMinted ? "MINTED" : result}
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
