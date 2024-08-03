"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import {radioValues} from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo2 = () => {
  const dispatch = useAppDispatch();
  const onClickSlender = () => {
    radioValues[2] = "slender";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickMediumBuild = () => {
    radioValues[2] = "medium build";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickStocky = () => {
    radioValues[2] = "stocky";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickObese = () => {
    radioValues[2] = "obese";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How would you describe <br />
          your physical build?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <RadioGroup defaultValue={radioValues[2]}>
          <Label
            onClick={onClickSlender}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfFemale/quiz-2nd/slim.webp"
              alt="lose-weight-img"
            />
            <h1 className="pr-[175px] font-semibold text-base ">Slim</h1>
            <RadioGroupItem className="mr-5 " value="slender" id="r1" />
          </Label>

          <Label
            onClick={onClickMediumBuild}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfFemale/quiz-2nd/mid-sized.webp"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Mid-sized</h1>
            <RadioGroupItem className="mr-5" value="medium build" id="r2" />
          </Label>
          <Label
            onClick={onClickStocky}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfFemale/quiz-2nd/havier.webp"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[135px] font-semibold text-base">On a heavier side</h1>
            <RadioGroupItem className="mr-5" value="stocky" id="r3" />
          </Label>
          <Label
            onClick={onClickObese}
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfFemale/quiz-2nd/over-weight.webp"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Overweight</h1>
            <RadioGroupItem className="mr-5" value="obese" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo2;
