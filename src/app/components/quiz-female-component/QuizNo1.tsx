"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { useRadioValues } from "../RadioValues";
import { CldImage } from "next-cloudinary";

const QuizNo1 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const handleUpdate = (index: number, value: any) => {
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const dispatch = useAppDispatch();
  // let data = useAppSelector(state=>state.data.items);
  const handleClickOnLoseWeight = () => {
    handleUpdate(1, "loseweight");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnGainMuscle = () => {
    handleUpdate(1, "gainmuscle");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnPreg = () => {
    handleUpdate(1, "recover after having a baby");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center ">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          What is your goal?
        </h1>
        <p className="mt-5 opacity-75">Please select your first priority</p>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <RadioGroup defaultValue={radioValues[1]}>
          <Label
            onClick={handleClickOnLoseWeight}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2 "
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-1st/ohulo1j3ufcaxuhc1cw5"
              alt="lose-weight-img"
            />
            <h1 className="pr-[130px] md:pr-[175px] pl-5 font-semibold text-base ">
              Lose Weight
            </h1>
            <RadioGroupItem className="mr-5 " value="loseweight" id="r1" />
          </Label>

          <Label
            onClick={handleClickOnGainMuscle}
            htmlFor="r2"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2  "
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-1st/ojzjmo41qbrmhzoemwjl"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[130px] md:pr-[175px] pl-5 font-semibold text-base">
              Gain Muscle
            </h1>
            <RadioGroupItem className="mr-5" value="gainmuscle" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnPreg}
            htmlFor="r3"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2  "
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-1st/pebimsvezyymszkb8qde"
              alt="recover-img"
            />

            <h1 className="pr-[20px] font-semibold text-base">
              Recover after having a baby
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="recover after having a baby"
              id="r3"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo1;
