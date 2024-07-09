"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo14 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnsoOutOfBreath = () => {
    radioValues[14] = "I'm so out of breath I can't talk";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnoutOfBreathButCanTalk = () => {
    radioValues[14] = "I'm somewhat out of breath but can talk";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnOKAfterOneFlightOfStairs = () => {
    radioValues[14] = "I'm OK after one flight of stairs";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickEasilyWalkUp = () => {
    radioValues[14] = "I can easily walk up a few flights of stairs";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          Are you out of breath after <br /> walking up a flight of <br />{" "}
          stairs?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[14]}>
          <Label
            onClick={handleClickOnsoOutOfBreath}
            htmlFor="r1"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-14th/very-hard-img.png"
              alt="very-hard-img"
            />
            <h1 className="pr-[40px]  font-semibold text-base ">
              I'm so out of breath I can't talk
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value="I'm so out of breath I can't talk"
              id="r1"
            />
          </Label>

          <Label
            onClick={handleClickOnoutOfBreathButCanTalk}
            htmlFor="r2"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-14th/hard-img.png"
              alt="hard-img"
            />

            <h1 className="pr-[40px]  font-semibold text-base">
              I'm somewhat out of breath but can talk
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I'm somewhat out of breath but can talk"
              id="r2"
            />
          </Label>
          <Label
            onClick={handleClickOnOKAfterOneFlightOfStairs}
            htmlFor="r3"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-14th/ok-img.png"
              alt="normal-img"
            />

            <h1 className="pr-[40px]  font-semibold text-base">
              I'm OK after one flight of stairs
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I'm OK after one flight of stairs"
              id="r3"
            />
          </Label>
          <Label
            onClick={handleClickEasilyWalkUp}
            htmlFor="r4"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px] mr-7"
              src="imageOfMale/quiz-14th/rocket-img.png"
              alt="like-img"
              cursor-pointer
            />

            <h1 className="pr-[40px]  font-semibold text-base">
              I can easily walk up a few flights of stairs
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I can easily walk up a few flights of stairs"
              id="r4"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo14;
