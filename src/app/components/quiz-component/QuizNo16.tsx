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
import { CldImage } from "next-cloudinary";

const QuizNo16 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnFewerThan12 = () => {
    radioValues[16] = "Fewer than 12";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOn13to20 = () => {
    radioValues[16] = "13to20";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnMoreThan21 = () => {
    radioValues[16] = "More than 21";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickDontKnow = () => {
    radioValues[16] = "I dont know";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How many push-ups could <br /> you do?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[16]}>
          <Label
            onClick={handleClickOnFewerThan12}
            htmlFor="r1"
            className="flex justify-between  shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-16th/yesrmuwq4vhvsktvkzap"
              alt="very-hard-img"
            />
            <h1 className="pr-[110px] md:pr-[140px] pl-5   font-semibold text-base ">
              less than 12
            </h1>
            <RadioGroupItem className="mr-5 " value="Fewer than 12" id="r1" />
          </Label>

          <Label
            onClick={handleClickOn13to20}
            htmlFor="r2"
            className="flex justify-between  shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-16th/bc5igs59ssxjt7dlncce"
              alt="hard-img"
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5   font-semibold text-base">
              13-20
            </h1>
            <RadioGroupItem className="mr-5" value="13to20" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnMoreThan21}
            htmlFor="r3"
            className="flex justify-between  shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-16th/bhmny5nzmtqj07rwmsm8"
              alt="normal-img"
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5   font-semibold text-base">
              More than 21
            </h1>
            <RadioGroupItem className="mr-5" value="More than 21" id="r3" />
          </Label>
          <Label
            onClick={handleClickDontKnow}
            htmlFor="r4"
            className="flex justify-between  shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-16th/an3er6wblbgsezko2mjt"
              alt="like-img"
              cursor-pointer
              mb-2
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5   font-semibold text-base">
              I don&apos;t know
            </h1>
            <RadioGroupItem className="mr-5" value="I dont know" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo16;
