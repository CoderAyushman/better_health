"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

const QuizNo10 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const handleUpdate = (index: number, value: any) => {
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const dispatch = useAppDispatch();
  const handleClickOnGym = () => {
    handleUpdate(10, "I prefer gym for workout");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickHome = () => {
    handleUpdate(10, "I prefer home for workout");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl mx-auto font-bold tracking-wide mt-7 max-w-[340px] md:max-w-[450px]">
          Select your preferred place for working out
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[10]}>
          <Label
            onClick={handleClickOnGym}
            htmlFor="r1"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-19th/puxr7uit86djarhj6bv6"
              alt="gym-img"
            />
            <h1 className="pr-[110px] md:pr-[140px] pl-5  font-semibold text-base ">
              Gym
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value="I prefer gym for workout"
              id="r1"
            />
          </Label>

          <Label
            onClick={handleClickHome}
            htmlFor="r2"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-19th/dbaghwvdn0vndfpox85p"
              alt="hard-img"
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5  font-semibold text-base">
              Home
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I prefer home for workout"
              id="r2"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo10;
