"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";

const QuizNo11 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnHighAndSteady = () => {
    radioValues[11] = "HighAndSteady";
    dispatch(increse());
  };
  const handleClickOnDraggingBeforeMeals = () => {
    radioValues[11] = "Dragging before meals";

    dispatch(increse());
  };
  const handleClickOnPostLunchSlump = () => {
    radioValues[11] = "Post lunch slump";

    dispatch(increse());
  };
  const handleClickOnIFeelTired = () => {
    radioValues[11] = "Low, I feel tired throughout the day";

    dispatch(increse());
  };
  return (
    <div className="flex-col justify-center items-center">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How are your energy <br /> levels during the day?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[11]}>
          <Label
            onClick={handleClickOnHighAndSteady}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-11th/high-img.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[175px] font-semibold text-base ">
              High and steady
            </h1>
            <RadioGroupItem className="mr-5 " value="HighAndSteady" id="r1" />
          </Label>

          <Label
            onClick={handleClickOnDraggingBeforeMeals}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-11th/dragging-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[100px] font-semibold text-base">
              Dragging before meals
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="Dragging before meals"
              id="r2"
            />
          </Label>
          <Label
            onClick={handleClickOnPostLunchSlump}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-11th/slump-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[140px] font-semibold text-base">
              Post lunch slump
            </h1>
            <RadioGroupItem className="mr-5" value="Post lunch slump" id="r3" />
          </Label>
          <Label
            onClick={handleClickOnIFeelTired}
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-11th/tired-img.png"
              alt="gain-muscle-img"
              cursor-pointer
            />

            <h1 className="pr-[40px] font-semibold text-base">
              Low, I feel tired throughout the day
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="Low, I feel tired throughout the day"
              id="r4"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo11;
