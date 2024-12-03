"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

const QuizNo7 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const handleUpdate = (index: number, value: any) => {
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const dispatch = useAppDispatch();
  const handleClickOnFewerThan20 = () => {
    handleUpdate(7, "Fewer than 20");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOn20to35 = () => {
    handleUpdate(7, "20to35");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnMoreThan35 = () => {
    handleUpdate(7, "More than 35");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickDontKnow = () => {
    handleUpdate(7, "I don’t know");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold mx-auto tracking-wide mt-7 max-w-[340px] md:max-w-[450px]">
          How many{" "}
          <a
            href="https://en.wikipedia.org/wiki/Squat_(exercise)#:~:text=A%20squat%20is%20a%20strength,joint%20plantarflexes%20when%20standing%20up."
            target="_blank"
          >
            squats
          </a>{" "}
          can you do?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[7]}>
          <Label
            onClick={handleClickOnFewerThan20}
            htmlFor="r1"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-15th/fomvb29xcnuqugceqler"
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
            className="flex justify-between mt-[10px] shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-15th/uqzvnpvubjuuaz6pv34x"
              alt="hard-img"
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5  font-semibold text-base">
              20-35
            </h1>
            <RadioGroupItem className="mr-5" value="20to35" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnMoreThan35}
            htmlFor="r3"
            className="flex justify-between mt-[10px] shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-15th/dkx4ax3ordyukknq4ial"
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
            className="flex justify-between mt-[10px] shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px] mr-7"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-15th/vix6k9yafffgaluypcxe"
              alt="like-img"
              cursor-pointer
            />

            <h1 className="pr-[110px] md:pr-[140px] pl-5  font-semibold text-base">
              I don&apos;t know
            </h1>
            <RadioGroupItem className="mr-5" value="I don’t know" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo7;
