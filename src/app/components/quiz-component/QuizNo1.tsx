"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";

import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { update } from "@/lib/features/dataSlice";
import { radioValues } from "../RadioValues";

console.log("radioValues[1]=", radioValues[1]);
const QuizNo1 = () => {
  const dispatch = useAppDispatch();
  // let data = useAppSelector(state=>state.data.items);
  const handleClickOnLoseWeight = () => {
    radioValues[1] = "loseweight";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnGainMuscle = () => {
    radioValues[1] = "gainmuscle";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          What is your goal?
        </h1>
        <p className="mt-5 opacity-75">Please select your first priority</p>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <RadioGroup defaultValue={radioValues[1]}>
          <Label
            onClick={handleClickOnLoseWeight}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-1"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-1st/lose-weight-img.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base pl-5 ">
              Lose Weight
            </h1>
            <RadioGroupItem className="mr-5 " value="loseweight" id="r1" />
          </Label>

          <Label
            onClick={handleClickOnGainMuscle}
            htmlFor="r2"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer "
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-1st/gain-muscle-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base pl-5">
              Gain Muscle
            </h1>
            <RadioGroupItem className="mr-5" value="gainmuscle" id="r2" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo1;
