"use client";
import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
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
            <CldImage
              width={500}
              height={500}
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/l81buhv4nmiilj1x5bjr"
              alt="male_img"
              className="sm:w-[300px]   lg:w-[440px]  h-full  lg:hover:transition transform duration-500 hover:scale-90 hover:opacity-75 cursor-pointer "
              onClick={onClickHandleMale}
            />
          </Link>
          <Link href="/quiz-female">
            <CldImage
              width={500}
              height={500}
              className="sm:w-[300px]  lg:w-[440px] h-full  lg:hover:transition transform duration-500 hover:scale-90 hover:opacity-75   cursor-pointer"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/hnhmlvzcii8w5qhorhmi"
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
