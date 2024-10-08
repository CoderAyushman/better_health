"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo7 = () => {
  const dispatch = useAppDispatch();
  const handleClickOn9to5 = () => {
    radioValues[7] = "My work schedule is 9am to 5pm";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnNightShift = () => {
    radioValues[7] = "My work schedule is nightshift";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnFlexibleHours = () => {
    radioValues[7] = "Im having flexiblehours for works";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnFullTime = () => {
    radioValues[7] = "Im retired";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          What is your work <br /> schedule like?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[7]}>
          <Label
            onClick={handleClickOn9to5}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-7th/sun-emoji.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base ">9 to 5</h1>
            <RadioGroupItem
              className="mr-5 "
              value="My work schedule is 9am to 5pm"
              id="r1"
            />
          </Label>

          <Label
            onClick={handleClickOnNightShift}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-7th/night-emoji.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">Night shifts</h1>
            <RadioGroupItem
              className="mr-5"
              value="My work schedule is nightshift"
              id="r2"
            />
          </Label>
          <Label
            onClick={handleClickOnFlexibleHours}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfFemale/quiz-7th/flexible.webp"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[120px] md:pr-[140px] font-semibold text-base">
              My hours are flexible
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="Im having flexiblehours for works"
              id="r3"
            />
          </Label>
          <Label
            onClick={handleClickOnFullTime}
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfFemale/quiz-7th/retired.webp"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">I&apos;m retired</h1>
            <RadioGroupItem className="mr-5" value="Im retired" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo7;
