"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import Link from "next/link";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo15 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnFewerThan20 = () => {
    radioValues[15] = "Fewer than 20";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOn20to35 = () => {
    radioValues[15] = "20to35";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnMoreThan35 = () => {
    radioValues[15] = "More than 35";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickDontKnow = () => {
    radioValues[15] = "I don’t know";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How many{" "}
          <a
            href="https://en.wikipedia.org/wiki/Squat_(exercise)#:~:text=A%20squat%20is%20a%20strength,joint%20plantarflexes%20when%20standing%20up."
            target="_blank"
          >
            squats
          </a>{" "}
          can you <br /> do?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[15]}>
          <Label
            onClick={handleClickOnFewerThan20}
            htmlFor="r1"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-15th/very-low-img.png"
              alt="very-hard-img"
            />
            <h1 className="pr-[110px] md:pr-[140px] pl-5  font-semibold text-base ">
              Fewer than 20
            </h1>
            <RadioGroupItem className="mr-5 " value="Fewer than 20" id="r1" />
          </Label>

          <Label
            onClick={handleClickOn20to35}
            htmlFor="r2"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-15th/its-ok-img.png"
              alt="hard-img"
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5  font-semibold text-base">20-35</h1>
            <RadioGroupItem className="mr-5" value="20to35" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnMoreThan35}
            htmlFor="r3"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-15th/like14-img.png"
              alt="normal-img"
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5  font-semibold text-base">
              More than 35
            </h1>
            <RadioGroupItem className="mr-5" value="More than 35" id="r3" />
          </Label>
          <Label
            onClick={handleClickDontKnow}
            htmlFor="r4"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-15th/confuse-img.png"
              alt="like-img"
              cursor-pointer
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5  font-semibold text-base">
              I don’t know
            </h1>
            <RadioGroupItem className="mr-5" value="I don’t know" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo15;
