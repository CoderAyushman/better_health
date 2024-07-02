import { decrease, increse } from "@/lib/features/counter/counterSlice";
import { useAppDispatch } from "@/lib/hooks";
import React from "react";

const AboutBody = () => {
  const dispatch = useAppDispatch();
  const handleBackArrowButton = () => {
    dispatch(decrease());
  };
  const handleOnclickButton = () => {
    dispatch(increse());
  };
  return (
    <div className="flex  mt-32 justify-center items-center ">
      <div className="mt-3  flex-col justify-center items-center gap-[410px] max-[450px]:gap-[320px]">
        <button>
          <img
            onClick={handleBackArrowButton}
            className="w-[18px]"
            src="arrow.png"
            alt="arrow png"
          />
        </button>
        <h1 className="text-2xl font-bold mt-7 mb-5 text-center">
          We’ve got your back!
        </h1>
        <img
          className="max-w-[410px]"
          src="about-body-img.png"
          alt="surrounding-img"
          mb-5
        />
        <div className="flex justify-center items-center  max-w-[410px] p-3 bg-gray-100 rounded-lg  mt-5">
          <p className="text-sm text-gray-500">
            Various factors can make it difficult for you to control your
            impulses. <br /> We’re going to{" "}
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
