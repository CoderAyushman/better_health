"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";
import ButtonForQ4 from "./ButtonForQ4";

const QuizNo3 = () => {
  const [counter,setCounter]=useState<number>(0);
  const dispatch = useAppDispatch();
  const handleClickOnArms = () => {
    setCounter(1);
    radioValues[2] = "slender";
  };
  const handleClickOnPecs = () => {
    radioValues[2] = "athletic";
    setCounter(1);
  };
  const handleClickOnBelly = () => {
    radioValues[2] = "shredded";
    setCounter(1);
  };
  const handleClickOnLegs = () => {
    radioValues[2] = "swole";
    setCounter(1);
  };
  const handleClickOnBack = () => {
    radioValues[2] = "swole";
    setCounter(1);
  };
  return (
    <div className="flex-col justify-center items-center">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          What are your target <br />
          zones?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <div>
          <Label
            onSelect={handleClickOnArms}
            
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/arms-img.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[175px] font-semibold text-base ">Arms</h1>
            <Checkbox className="mr-5 " id="r1" />
          </Label>

          <Label
            onClick={handleClickOnPecs}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/pecs-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Pecs</h1>
            <Checkbox className="mr-5" value="athletic" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnBelly}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/belly-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Belly</h1>
            <Checkbox className="mr-5" value="shredded" id="r3" />
          </Label>
          <Label
            onClick={handleClickOnLegs}
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/legs-img.png"
              alt="gain-muscle-img"
              cursor-pointer
            />

            <h1 className="pr-[175px] font-semibold text-base">Legs</h1>
            <Checkbox className="mr-5" value="swole" id="r4" />
          </Label>
          <Label
            onClick={handleClickOnBack}
            htmlFor="r5"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/back-img.png"
              alt="gain-muscle-img"
              cursor-pointer
            />

            <h1 className="pr-[175px] font-semibold text-base">Back</h1>
            <Checkbox className="mr-5" value="swole" id="r5" />
          </Label>
        </div>
      </div>
      <Footer />
      <div className="p-[50px]"></div>

      <ButtonForQ4 num={counter} />
    </div>
  );
};

export default QuizNo3;
