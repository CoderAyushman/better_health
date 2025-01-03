"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

const QuizNo3 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const handleUpdate = (index: number, value: any) => {
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const dispatch = useAppDispatch();
  const handleClickOnSlender = () => {
    handleUpdate(3, "slender");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnAthletic = () => {
    handleUpdate(3, "athletic");

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnShredded = () => {
    handleUpdate(3, "shredded");

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnSwole = () => {
    handleUpdate(3, "swole");

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl mx-auto font-bold tracking-wide mt-7 max-w-[340px] md:max-w-[450px]">
          What is your “dream body”?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <RadioGroup defaultValue={radioValues[3]}>
          <Label
            onClick={handleClickOnSlender}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-3rd/fs8rfgjalmlhipzflrec"
              alt="lose-weight-img"
            />
            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base ">
              Thin
            </h1>
            <RadioGroupItem className="mr-5 " value="slender" id="r1" />
          </Label>

          <Label
            onClick={handleClickOnAthletic}
            htmlFor="r2"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-3rd/fugv1o3eggh9d4jcftlm"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Toned
            </h1>
            <RadioGroupItem className="mr-5" value="athletic" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnShredded}
            htmlFor="r3"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-3rd/tudusyophuorofu8pqgb"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Curvy
            </h1>
            <RadioGroupItem className="mr-5" value="shredded" id="r3" />
          </Label>
          <Label
            onClick={handleClickOnSwole}
            htmlFor="r4"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-3rd/p88rhycg2vg3g1bss2zb"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[60px] font-semibold text-base">
              Just a few size smaller
            </h1>
            <RadioGroupItem className="mr-5" value="swole" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo3;
