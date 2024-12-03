"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/lib/hooks";
import { useRadioValues } from "../RadioValues";
import ButtonForQ4 from "./ButtonForQ4";
import { CldImage } from "next-cloudinary";

const QuizNo3 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
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
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[4].one = !isCheckedForQ1;
      return newValues;
    });
  };
  const handleClickOnPecs = () => {
    setIsCheckedForQ2(!isCheckedForQ2);
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[4].two = !isCheckedForQ2;
      return newValues;
    })
  };
  const handleClickOnBelly = () => {
    setIsCheckedForQ3(!isCheckedForQ3);
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[4].three = !isCheckedForQ3;
      return newValues;
    })
  };
  const handleClickOnLegs = () => {
    setIsCheckedForQ4(!isCheckedForQ4);
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[4].four = !isCheckedForQ4;
      return newValues;
    })
  };
  const handleClickOnBack = () => {
    setIsCheckedForQ5(!isCheckedForQ5);
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[4].five = !isCheckedForQ5;
      return newValues;
    })
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7 max-w-[340px] md:max-w-[450px] mx-auto">
          What are your target zones?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <div>
          <Label
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-4th/jylujirop1yzeyfu58lk"
              alt="lose-weight-img"
            />
            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base ">
              Arms
            </h1>
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
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-4th/eeyxnabgffxwj2vevxjf"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Pecs
            </h1>
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
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-4th/mebovczgw2hyloyoyhlx"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Belly
            </h1>
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
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-4th/oicioys5qot2zdznegaa"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Legs
            </h1>
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
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-4th/us5qkescxcmymfynfwi7"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Back
            </h1>
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
