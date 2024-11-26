"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/lib/hooks";
import { radioValues } from "../RadioValues";
import ButtonForQ4 from "./ButtonForQ4";
import { CldImage } from "next-cloudinary";

const QuizNo = () => {
  // const [counter, setCounter] = useState<number>(0);
  const [isCheckedForQ1, setIsCheckedForQ1] = useState(false);
  const [isCheckedForQ2, setIsCheckedForQ2] = useState(false);
  const [isCheckedForQ3, setIsCheckedForQ3] = useState(false);

  let count =
    radioValues[18].one || radioValues[18].two || radioValues[18].three;

  const handleClickOnSensitiveBack = () => {
    setIsCheckedForQ1(!isCheckedForQ1);
    radioValues[18].one = !isCheckedForQ1;
    setIsCheckedForQ3(false);
    radioValues[18].three = false;
  };
  const handleClickOnSensitiveKnees = () => {
    setIsCheckedForQ2(!isCheckedForQ2);
    radioValues[18].two = !isCheckedForQ2;
    setIsCheckedForQ3(false);
    radioValues[18].three = false;
  };
  const handleClickNeither = () => {
    setIsCheckedForQ3(!isCheckedForQ3);
    radioValues[18].three = !isCheckedForQ3;
    setIsCheckedForQ1(false);
    radioValues[18].one = false;
    setIsCheckedForQ2(false);
    radioValues[18].two = false;
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          Do you struggle with any of <br /> the following?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <div>
          <Label
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-18th/gqms777sm4cb5na2bp06"
              alt="sensetive-back-img"
            />
            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base ">
              Sensitive Back
            </h1>
            <Checkbox
              className="mr-5 "
              id="r1"
              value="Sensitive Back"
              checked={radioValues[18].one}
              onCheckedChange={handleClickOnSensitiveBack}
            />
          </Label>

          <Label
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-18th/boaw5iclk2smnr7wtdbw"
              alt="Sensitive Knees"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Sensitive Knees
            </h1>
            <Checkbox
              className="mr-5"
              value="Sensitive Knees"
              id="r2"
              checked={radioValues[18].two}
              onCheckedChange={handleClickOnSensitiveKnees}
            />
          </Label>

          <Label
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-18th/b74klewhlhstdf3eef5y"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Neither
            </h1>
            <Checkbox
              className="mr-5"
              value="Neither"
              id="r3"
              checked={radioValues[18].three}
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
