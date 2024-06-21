"use client";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";

const intromale = () => {
  const dispatch=useAppDispatch();
  const handleOnclick=()=>{
  dispatch(increse());
  }
  return (
    <div className="mt-32 flex-col justify-center text-center items-center">
      <p className="pb-10">
        <span className="text-customGreen font-bold text-5xl">
          150 million people
        </span>
        <br />
        <b className="text-2xl">have chosen BetterMe</b>
      </p>
      <div className="flex justify-center items-center ">
        <img className="w-96 " src="male-intro-img.png" alt="intro image" />
      </div>
      <Link
        onClick={handleOnclick}
        href="quiz"
        className="bg-customGreen rounded-full overflow-visible  text-white pt-5 mt-[-10px] pb-5  pl-28 pr-28"
      >
        <b>CONTINUE</b>
      </Link>
      <Footer />
    </div>
  );
};

export default intromale;
