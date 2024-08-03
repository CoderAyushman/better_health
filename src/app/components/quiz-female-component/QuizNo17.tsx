"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import {radioValues} from "../RadioValues";
import Link from "next/link";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo17 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnSquats = () => {
    radioValues[17] = "squats";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickLunges = () => {
    radioValues[17] = "lunges";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnPlank = () => {
    radioValues[17] = "plank";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickBurpees = () => {
    radioValues[17] = "Burpees";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          Which exercise is your <br /> least favorite?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[17]}>
          <Label
            onClick={handleClickOnSquats}
            htmlFor="r1"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfFemale/quiz-17th/squats.webp"
              alt="squats-img"
            />
            <h1 className="pr-[100px]  font-semibold text-base ">Squats</h1>
            <RadioGroupItem className="mr-5 " value="squats" id="r1" />
          </Label>

          <Label
            onClick={handleClickLunges}
            htmlFor="r2"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfFemale/quiz-17th/lunges.webp"
              alt="hard-img"
            />

            <h1 className="pr-[100px]  font-semibold text-base">Lunges</h1>
            <RadioGroupItem className="mr-5" value="lunges" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnPlank}
            htmlFor="r3"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfFemale/quiz-17th/plank.webp"
              alt="normal-img"
            />

            <h1 className="pr-[100px]  font-semibold text-base">Plank</h1>
            <RadioGroupItem className="mr-5" value="plank" id="r3" />
          </Label>
          <Label
            onClick={handleClickBurpees}
            htmlFor="r4"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfFemale/quiz-17th/burpees.webp"
              alt="like-img"
              cursor-pointer
            />

            <h1 className="pr-[100px]  font-semibold text-base">Burpees</h1>
            <RadioGroupItem className="mr-5" value="Burpees" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo17;
