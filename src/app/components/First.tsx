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
    <div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-sans text-4xl font-bold tracking-widest mb-5">
          WEIGHT LOSS PLAN
        </h1>
        <span className="text-gray-400 text-xl mb-7">
          ACCORDING TO YOUR <b>GENDER</b>
        </span>
        <span className="mb-7">
          <b>1 MINUTE</b> QUIZ
        </span>
      </div>
      <div className="flex gap-4 w-100% self-center justify-center mb-10 items-center ">
        <Link href="/intromale">
          <img
            className="max-w-96 max-[440px]:max-w-40 h-full  lg:hover:transition transform duration-500 hover:scale-90 hover:opacity-75 cursor-pointer "
            src="male_img.png"
            alt="male_img"
            onClick={onClickHandleMale}
          />
        </Link>
        <Link href="/introfemale">
          <img
            className="max-w-96 max-[440px]:max-w-40 h-full  lg:hover:transition transform duration-500 hover:scale-90 hover:opacity-75   cursor-pointer"
            src="female_img.png"
            alt="female_img"
            onClick={onClickHandleFemale}
          />
        </Link>
      </div>
    </div>
  );
};

export default First;
