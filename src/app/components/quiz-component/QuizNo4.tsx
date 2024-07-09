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

const QuizNo3 = () => {
  // const [counter, setCounter] = useState<number>(0);
  const [isCheckedForQ1, setIsCheckedForQ1] = useState(false);
  const [isCheckedForQ2, setIsCheckedForQ2] = useState(false);
  const [isCheckedForQ3, setIsCheckedForQ3] = useState(false);
  const [isCheckedForQ4, setIsCheckedForQ4] = useState(false);
  const [isCheckedForQ5, setIsCheckedForQ5] = useState(false);
  let count =
    radioValues[4].one ||
    radioValues[4].two ||
    radioValues[4].three ||
    radioValues[4].four ||
    radioValues[4].five;
  const dispatch = useAppDispatch();
  const handleClickOnArms = () => {
    setIsCheckedForQ1(!isCheckedForQ1);
    radioValues[4].one = !isCheckedForQ1;
  };
  const handleClickOnPecs = () => {
    setIsCheckedForQ2(!isCheckedForQ2);
    radioValues[4].two = !isCheckedForQ2;
  };
  const handleClickOnBelly = () => {
    setIsCheckedForQ3(!isCheckedForQ3);
    radioValues[4].three = !isCheckedForQ3;
  };
  const handleClickOnLegs = () => {
    setIsCheckedForQ4(!isCheckedForQ4);
    radioValues[4].four = !isCheckedForQ4;
  };
  const handleClickOnBack = () => {
    setIsCheckedForQ5(!isCheckedForQ5);
    radioValues[4].five = isCheckedForQ5;
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          What are your target <br />
          zones?
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
              src="imageOfMale/quiz-4th/arms-img.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[175px] font-semibold text-base ">Arms</h1>
            <Checkbox
              className="mr-5 "
              id="r1"
              value="arms"
              checked={radioValues[4].one}
              onCheckedChange={handleClickOnArms}
            />
          </Label>

          <Label
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/pecs-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Pecs</h1>
            <Checkbox
              className="mr-5"
              value="pecs"
              id="r2"
              checked={radioValues[4].two}
              onCheckedChange={handleClickOnPecs}
            />
          </Label>

          <Label
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/belly-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Belly</h1>
            <Checkbox
              className="mr-5"
              value="belly"
              id="r3"
              checked={radioValues[4].three}
              onCheckedChange={handleClickOnBelly}
            />
          </Label>

          <Label
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/legs-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Legs</h1>
            <Checkbox
              className="mr-5"
              value="legs"
              id="r4"
              checked={radioValues[4].four}
              onCheckedChange={handleClickOnLegs}
            />
          </Label>

          <Label
            htmlFor="r5"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-4th/back-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[175px] font-semibold text-base">Back</h1>
            <Checkbox
              className="mr-5"
              value="back"
              id="r5"
              checked={radioValues[4].five}
              onCheckedChange={handleClickOnBack}
            />
          </Label>
        </div>
      </div>

      <div className="p-[50px]"></div>

      <ButtonForQ4 num={count} />
    </div>
  );
};

export default QuizNo3;
