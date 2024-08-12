"use client";
import React from "react";
import Link from "next/link";
const First = () => {
  const onClickHandleMale = () => {
    console.log("clicked male");
  };
  const onClickHandleFemale = () => {
    console.log("clicked female");
  };
  return (
    <div className="min-h-[100vh] w-[100vw] flex-1 items-center justify-center">
      <div className="flex-col items-center justify-center">
        <div className="flex-col items-center justify-center text-center">
          <h1 className="font-sans text-4xl font-bold tracking-widest ">
            WEIGHT LOSS PLAN
          </h1>

          <div className="text-gray-400 text-xl mb-7">
            ACCORDING TO YOUR <b>GENDER</b>
          </div>

          <div className="mb-7">
            <b>1 MINUTE</b> QUIZ
          </div>
        </div>

        <div className="md:flex  gap-4 w-[100%] self-center justify-center mb-10 items-center ">
          <Link href="/quiz">
            <img
              className="sm:w-[300px]   lg:w-[440px]  h-full  lg:hover:transition transform duration-500 hover:scale-90 hover:opacity-75 cursor-pointer "
              src="male_img.png"
              alt="male_img"
              onClick={onClickHandleMale}
            />
          </Link>
          <Link href="/quiz-female">
            <img
              className="sm:w-[300px]  lg:w-[440px] h-full  lg:hover:transition transform duration-500 hover:scale-90 hover:opacity-75   cursor-pointer"
              src="female_img.png"
              alt="female_img"
              onClick={onClickHandleFemale}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
