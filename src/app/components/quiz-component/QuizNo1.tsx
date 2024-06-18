"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";

const QuizNo1 = () => {
  const [radioGroupDefaultValue,setRadioGroupDefaultValue]=useState<string>("gainmuscle");
  useEffect(()=>{
    console.log(radioGroupDefaultValue)
  },[])
 
  const dispatch=useAppDispatch();
  
  const handleClickOnLoseWeight=()=>{
      radioValues[0]="loseweight";
      setRadioGroupDefaultValue("loseweight");
    
    dispatch(increse());
    }
  const handleClickOnGainMuscle=()=>{
    radioValues[0]="gainmuscle";
    dispatch(increse());
  }
  return (
    <div className="flex-col justify-center items-center">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          What is your goal?
        </h1>
        <p className="mt-5 opacity-75">Please select your first priority</p>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <RadioGroup defaultValue={radioValues[0]}>
        <Label
        onClick={handleClickOnLoseWeight}
          htmlFor="r1"
          className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
        >
          <img
            className="w-[104px]"
            src="imageOfMale/quiz-1st/lose-weight-img.png"
            alt="lose-weight-img"
          />
          <h1 className="pr-[175px] font-semibold text-base ">Lose Weight</h1>
          <RadioGroupItem className="mr-5 " value="loseweight" id="r1" />
        </Label>

        <Label
          onClick={handleClickOnGainMuscle}
          htmlFor="r2"
          className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
        >
          <img
            className="w-[104px]"
            src="imageOfMale/quiz-1st/gain-muscle-img.png"
            alt="gain-muscle-img"
          />

          <h1 className="pr-[175px] font-semibold text-base">Gain Muscle</h1>
          <RadioGroupItem className="mr-5" value="gainmuscle" id="r2" />
        </Label>
        </RadioGroup>
      </div>
      <Footer />
    </div>
  );
};

export default QuizNo1;
