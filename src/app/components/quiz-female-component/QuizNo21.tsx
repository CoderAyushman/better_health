"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo21 = () => {
  const quizCounter = useAppSelector(state => state.diplayCounter.items)
  const dispatch = useAppDispatch();
  const handleClickOn10to15min = () => {
    radioValues[21] = "10to15min";
    dispatch(increse());
    // if(quizCounter==21){

    // }
    dispatch(increseDisplayCounter());
  };
  const handleClickOn15to25min = () => {
    radioValues[21] = "15-25 min";

    dispatch(increse());
    // if(quizCounter==21){

    // }
    dispatch(increseDisplayCounter());
  };
  const handleClickOn25minPlus = () => {
    radioValues[21] = "25+ min";

    dispatch(increse());
    // if(quizCounter==21){

    // }
    dispatch(increseDisplayCounter());
  };
  const handleClickOnIDontKnow = () => {
    radioValues[21] = "i dont know";

    dispatch(increse());
    // if(quizCounter==21){

    // }
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How much time do you <br /> want to work out?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[21]}>
          <Label
            onClick={handleClickOn10to15min}
            htmlFor="r1"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-21st/low-img.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[140px] font-semibold text-base ">10-15 min</h1>
            <RadioGroupItem className="mr-5 " value="10to15min" id="r1" />
          </Label>

          <Label
            onClick={handleClickOn15to25min}
            htmlFor="r2"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-21st/its-ok-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[140px] font-semibold text-base">15-25 min</h1>
            <RadioGroupItem className="mr-5" value="15-25 min" id="r2" />
          </Label>
          <Label
            onClick={handleClickOn25minPlus}
            htmlFor="r3"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-21st/fire-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[140px] font-semibold text-base">25+ min</h1>
            <RadioGroupItem className="mr-5" value="25+ min" id="r3" />
          </Label>
          <Label
            onClick={handleClickOnIDontKnow}
            htmlFor="r4"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-21st/confuse-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[140px] font-semibold text-base">i don&apos;t know</h1>
            <RadioGroupItem className="mr-5" value="i dont know" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default QuizNo21;
