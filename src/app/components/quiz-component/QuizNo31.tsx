"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

const QuizNo31 = () => {
  const [isRequireYear, setIsRequireYear] = useState(
    radioValues[31].isRequireYear
  );
  const [year, setIsyear] = useState<number>(radioValues[31].year);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  const handleOnChangeYear = (event: any) => {
    const e = event.target.value;
    if (e == null) {
      radioValues[31].isRequireYear = false;
      setIsRequireYear(false);
    } else if (e >= 16 && e <= 99) {
      try {
        radioValues[31].year = e;
        setIsyear(e);
        radioValues[31].isRequireYear = true;
        setIsRequireYear(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      radioValues[31].isRequireYear = false;
      setIsRequireYear(false);
    }
  };

  return (
    <>
      <div className="flex-col justify-center items-center text-center mb-5">
        <h1 className="text-3xl font-bold tracking-wide mt-7 max-w-full">
          What is your age?
        </h1>

        <div className="flex  justify-center items-center mt-7 gap-3">
          <div className="flex-col">
            <div className="flex items-center">
              <div className="max-w-[200px] overflow-hidden mt-5  font-bold">
                <Input
                  className="w-[230px] text-center text-5xl"
                  type="number"
                  id="cm"
                  max={99}
                  min={16}
                  maxLength={3}
                  minLength={1}
                  autoFocus
                  onChange={(e) => {
                    handleOnChangeYear(e);
                  }}
                  defaultValue={year}
                />
              </div>
              <h1 className="font-bold text-2xl ">year</h1>
            </div>

            {!isRequireYear ? (
              <p className="text-xs mt-2">
                You are not eligible to use this application
              </p>
            ) : (
              <>
                <div className="flex justify-center items-center text-left mt-4">
                  <div className="flex-col max-w-[350px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-green-300">
                    <div className="flex justify-start items-center">
                      <CldImage
                        width={500}
                        height={500}
                        src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-31st/njwbtxrkutkmpivi73ym"
                        alt="benefits"
                        className="max-w-[50px] p-2 pl-0"
                      />
                      <h2 className="font-semibold">
                        We ask your age to personalize <br /> your plan
                      </h2>
                    </div>
                    <p className="text-gray-400 text-base">
                      Older people are found to have a higher body fat
                      percentage than younger people with the same BMI.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mb-5 mt-5">
          {isRequireYear ? (
            <button
              onClick={handleClick}
              className="cursor-pointer bg-customGreen pl-[130px] pr-[130px] pt-[15px] pb-[15px] rounded-full text-white  "
            >
              <h1>
                <b>NEXT STEP</b>
              </h1>
            </button>
          ) : (
            <button className="cursor-not-allowed  bg-gray-200 pl-[130px] pr-[130px] pt-[15px] pb-[15px] rounded-full text-gray-500  ">
              <h1>
                <b>NEXT STEP</b>
              </h1>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizNo31;
