"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

const QuizNo2 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const handleUpdate = (index: number, value: any) => {
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const dispatch = useAppDispatch();
  const onClickSlender = () => {
    handleUpdate(2, "slender");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickMediumBuild = () => {
    handleUpdate(2, "medium build");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickStocky = () => {
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickObese = () => {
    handleUpdate(2, "obese");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl mx-auto font-bold tracking-wide mt-7 max-w-[340px] md:max-w-[450px]">
          How would you describe your physical build?
        </h1>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <RadioGroup defaultValue={radioValues[2]}>
          <Label
            onClick={onClickSlender}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-2nd/ovr9ovkv1gkbmunsfcra"
              alt="lose-weight-img"
            />
            <h1 className="pr-[165px] md:pr-[175px] font-semibold text-base ">
              Slim
            </h1>
            <RadioGroupItem className="mr-5 " value="slender" id="r1" />
          </Label>

          <Label
            onClick={onClickMediumBuild}
            htmlFor="r2"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-2nd/hdzvyckotactsknepchh"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[130px] md:pr-[175px] font-semibold text-base">
              Mid-sized
            </h1>
            <RadioGroupItem className="mr-5" value="medium build" id="r2" />
          </Label>
          <Label
            onClick={onClickStocky}
            htmlFor="r3"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-2nd/hwksknghj3jsbhvygee9"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[100px] font-semibold text-base">
              On a heavier side
            </h1>
            <RadioGroupItem className="mr-5" value="stocky" id="r3" />
          </Label>
          <Label
            onClick={onClickObese}
            htmlFor="r4"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/quiz-2nd/cvtqin6jwmsavsehm15e"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[155px] md:pr-[175px] font-semibold text-base">
              Overweight
            </h1>
            <RadioGroupItem className="mr-5" value="obese" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo2;
