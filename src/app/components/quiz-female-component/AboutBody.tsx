import { decrease, increse } from "@/lib/features/counter/counterSlice";
import {
  addDisplayCounter,
  decreaseDisplayCounter,
  increseDisplayCounter,
} from "@/lib/features/counter/displayCounterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CldImage } from "next-cloudinary";
import React from "react";

const AboutBody = () => {
  const dispatch = useAppDispatch();
  const displayCounter = useAppSelector((state) => state.diplayCounter.items);
  const handleBackArrowButton = () => {
    dispatch(addDisplayCounter(13));
    dispatch(decrease());
  };
  const handleOnclickButton = () => {
    dispatch(addDisplayCounter(14));
    dispatch(increse());
  };
  return (
    <div className="flex  mt-32 justify-center items-center ">
      <div className="mt-3  flex-col justify-center items-center max-gap-[320px] md:gap-[410px] max-w-[340px] md:max-w-[450px]">
        <button>
          <CldImage
            width={500}
            height={500}
            onClick={handleBackArrowButton}
            className="w-[18px] "
            src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/k0euitymbhpdglasmx9z"
            alt="arrow png"
          />
        </button>
        <h1 className="text-2xl font-bold mt-7 mb-5 text-center">
          We&apos;ve got your back!
        </h1>
        <CldImage
          width={500}
          height={500}
          className="w-[410px]"
          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/b9nuezn8tw18xvd2gk5j"
          alt="surrounding-img"
        />
        <div className="flex justify-center items-center  max-w-[410px] p-3 bg-gray-100 rounded-lg  mt-5">
          <p className="text-sm text-gray-500">
            Various factors can make it difficult for you to control your
            impulses. <br /> We&apos;re going to{" "}
            <span className="text-customGreen">figure out why</span> this
            happens and how we can change things for the better.
          </p>
        </div>
        <div className="flex justify-center items-center mt-5 max-w-[410px] mb-5">
          <button
            className="max-w-[325px] bg-customGreen pt-3 pb-3 pl-[110px] pr-[110px] rounded-full text-white font-bold"
            onClick={handleOnclickButton}
          >
            OK, GOT IT!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
