"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo3 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnSlender = () => {
    radioValues[3] = "slender";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnAthletic = () => {
    radioValues[3] = "athletic";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnShredded = () => {
    radioValues[3] = "shredded";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnSwole = () => {
    radioValues[3] = "swole";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          What is your body goal?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <RadioGroup defaultValue={radioValues[3]}>
          <Label
            onClick={handleClickOnSlender}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-3rd/afewsmaller-img.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[175px] font-semibold text-base ">
              A few sizes smaller
            </h1>
            <RadioGroupItem className="mr-5 " value="slender" id="r1" />
          </Label>

          <Label
            onClick={handleClickOnAthletic}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-3rd/athletic-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Athletic</h1>
            <RadioGroupItem className="mr-5" value="athletic" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnShredded}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-3rd/shredded-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Shredded</h1>
            <RadioGroupItem className="mr-5" value="shredded" id="r3" />
          </Label>
          <Label
            onClick={handleClickOnSwole}
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-3rd/swole-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="pr-[175px] font-semibold text-base">Swole</h1>
            <RadioGroupItem className="mr-5" value="swole" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo3;
