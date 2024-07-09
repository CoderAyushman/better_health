"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";
import Link from "next/link";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo19 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnGym = () => {
    radioValues[19] = "gym";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickHome = () => {
    radioValues[19] = "home";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          Select your preferred <br /> place for working out
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[19]}>
          <Label
            onClick={handleClickOnGym}
            htmlFor="r1"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-19th/gym-img.png"
              alt="gym-img"
            />
            <h1 className="pr-[100px]  font-semibold text-base ">Gym</h1>
            <RadioGroupItem className="mr-5 " value="gym" id="r1" />
          </Label>

          <Label
            onClick={handleClickHome}
            htmlFor="r2"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-19th/home-img.png"
              alt="hard-img"
            />

            <h1 className="pr-[100px]  font-semibold text-base">Home</h1>
            <RadioGroupItem className="mr-5" value="home" id="r2" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo19;
