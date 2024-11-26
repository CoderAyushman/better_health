"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo14 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnsoOutOfBreath = () => {
    radioValues[14] = "I&apos;m so out of breath I can&apos;t talk";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnoutOfBreathButCanTalk = () => {
    radioValues[14] = "I&apos;m somewhat out of breath but can talk";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnOKAfterOneFlightOfStairs = () => {
    radioValues[14] = "I&apos;m OK after one flight of stairs";

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
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-14th/izhkwkamwoxyqrnntabi"
              alt="very-hard-img"
            />
            <h1 className="pr-[40px] md:pr-[40px]   font-semibold text-base ">
              I&apos;m so out of breath I can&apos;t talk
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
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
            mb-2
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-14th/svzclk0qb3vxowxdtnlk"
              alt="hard-img"
            />

            <h1 className="pr-[40px] md:pr-[40px]   font-semibold text-base">
              I&apos;m somewhat out of breath but can talk
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
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
            mb-2
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-14th/ytzdq6r8t8ckafu8qn1a"
              alt="normal-img"
            />

            <h1 className="pr-[40px] md:pr-[40px]   font-semibold text-base">
              I&apos;m OK after one flight of stairs
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
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
            mb-2
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-14th/rerbbz6sbe03laap8zfy"
              alt="like-img"
              cursor-pointer
            />

            <h1 className="pr-[40px] md:pr-[40px]   font-semibold text-base">
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
