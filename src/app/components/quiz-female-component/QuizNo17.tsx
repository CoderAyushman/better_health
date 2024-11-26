"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

const QuizNo17 = () => {
  const dispatch = useAppDispatch();
  const handleClickOnSquats = () => {
    radioValues[17] = "squats";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickLunges = () => {
    radioValues[17] = "lunges";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnPlank = () => {
    radioValues[17] = "plank";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickBurpees = () => {
    radioValues[17] = "Burpees";

    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          Which exercise is your <br /> least favorite?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[17]}>
          <Label
            onClick={handleClickOnSquats}
            htmlFor="r1"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-17th/omvw7cyxtnhibysoxjyx"
              alt="squats-img"
            />
            <h1 className="pr-[110px] md:pr-[140px] pl-5   font-semibold text-base ">
              Squats
            </h1>
            <RadioGroupItem className="mr-5 " value="squats" id="r1" />
          </Label>

          <Label
            onClick={handleClickLunges}
            htmlFor="r2"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-17th/l1tbetbjqcpvdpovc0jl"
              alt="hard-img"
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5   font-semibold text-base">
              Lunges
            </h1>
            <RadioGroupItem className="mr-5" value="lunges" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnPlank}
            htmlFor="r3"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-17th/jams2pjh6pegeo4ubt1k"
              alt="normal-img"
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5   font-semibold text-base">
              Plank
            </h1>
            <RadioGroupItem className="mr-5" value="plank" id="r3" />
          </Label>
          <Label
            onClick={handleClickBurpees}
            htmlFor="r4"
            className="flex justify-between mt-[10px] shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-17th/rydorxwnwyxho1jdro1e"
              alt="like-img"
              cursor-pointer
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5   font-semibold text-base">
              Burpees
            </h1>
            <RadioGroupItem className="mr-5" value="Burpees" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo17;
