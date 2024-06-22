"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";
import ButtonForQ4 from "./ButtonForQ4";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const QuizNo = () => {
  // const [counter, setCounter] = useState<number>(0);
  const [isCheckedForQ1, setIsCheckedForQ1] = useState(false);
  const [isCheckedForQ2, setIsCheckedForQ2] = useState(false);
  const [isCheckedForQ3, setIsCheckedForQ3] = useState(false);
  const [isCheckedForQ4, setIsCheckedForQ4] = useState(false);
  const [isCheckedForQ5, setIsCheckedForQ5] = useState(false);
  let count=isCheckedForQ1 || isCheckedForQ2 || isCheckedForQ3 || isCheckedForQ4 || isCheckedForQ5;
  const dispatch = useAppDispatch();
  const handleClickOnSensitiveBack = () => {
    setIsCheckedForQ1(!isCheckedForQ1);
    radioValues[18] = "back";
  };
  const handleClickOnSensitiveKnees = () => {
    setIsCheckedForQ2(!isCheckedForQ2);
    radioValues[18] = "knees";
  };
  const handleClickNeither = () => {
    setIsCheckedForQ3(!isCheckedForQ3);
    radioValues[18] = "neither";
  };
  
  return (
    <div className="flex-col justify-center items-center">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
        Do you struggle with any of <br /> the following?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <div>
          <Label
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-18th/sensetive-back-img.png"
              alt="sensetive-back-img"
            />
            <h1 className="pr-[175px] font-semibold text-base ">Sensitive Back</h1>
            <Checkbox
              className="mr-5 "
              id="r1"
              value="Sensitive Back"
              checked={isCheckedForQ1}
              onCheckedChange={handleClickOnSensitiveBack}
            />
          </Label>

          <Label
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-18th/sensetive-knee-img.png"
              alt="Sensitive Knees"
            />

            <h1 className="pr-[175px] font-semibold text-base">Sensitive Knees</h1>
            <Checkbox
              className="mr-5"
              value="Sensitive Knees"
              id="r2"
              onCheckedChange={handleClickOnSensitiveKnees}
            />
          </Label>

          <Label
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-18th/neither-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Neither</h1>
            <Checkbox
              className="mr-5"
              value="Neither"
              id="r3"
              onCheckedChange={handleClickNeither}
            />
          </Label>

        </div>
      </div>
      
      <div className="p-[50px]"></div>

      <ButtonForQ4 num={count} />
    </div>
  );
};

export default QuizNo;
