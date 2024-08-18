"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo13 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnAlmostEveryDay = () => {
    radioValues[13] = "I go for walk almost Every Day";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOn3to4TimesPerWeek = () => {
    radioValues[13] = "I go for walk 3-4 times per week";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOn1to2TimesPerWeek = () => {
    radioValues[13] = "I go for walk 1-2 times per week";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickMoreLikeOnceAMonth = () => {
    radioValues[13] = "I go for walk more like once a month";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How often do you go for <br /> walks?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center  mt-5">
        <RadioGroup defaultValue={radioValues[13]}>
          <Label
            onClick={handleClickOnAlmostEveryDay}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-13th/cool-img.png"
              alt="cool-img"
            />
            <h1 className="pr-[40px] md:pr-[40px]  font-semibold text-base ">
              Almost every day
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value="I go for walk almost Every Day"
              id="r1"
            />
          </Label>

          <Label
            onClick={handleClickOn3to4TimesPerWeek}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-13th/3to4times-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[40px] md:pr-[40px]  font-semibold text-base">
              3-4 times per week
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I go for walk 3-4 times per week"
              id="r2"
            />
          </Label>
          <Label
            onClick={handleClickOn1to2TimesPerWeek}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-13th/normal-img.png"
              alt="normal-img"
            />

            <h1 className="pr-[40px] md:pr-[40px]  font-semibold text-base">
              1-2 times per week
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I go for walk 1-2 times per week"
              id="r3"
            />
          </Label>
          <Label
            onClick={handleClickMoreLikeOnceAMonth}
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-13th/like-img.png"
              alt="like-img"
              cursor-pointer
              mb-2
            />

            <h1 className="pr-[40px] md:pr-[40px] pl-5 font-semibold text-base">
              More like once a month
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I go for walk more like once a month"
              id="r4"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo13;
