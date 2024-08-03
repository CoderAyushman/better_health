"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import {radioValues} from "../RadioValues";
import ButtonForQ4 from "./ButtonForQ4";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const QuizNo27 = () => {
  // const [counter, setCounter] = useState<number>(0);
  const [isCheckedForQ1, setIsCheckedForQ1] = useState<boolean>(false);
  const [isCheckedForQ2, setIsCheckedForQ2] = useState<boolean>(false);
  const [isCheckedForQ3, setIsCheckedForQ3] = useState<boolean>(false);
  const [isCheckedForQ4, setIsCheckedForQ4] = useState<boolean>(false);
  const [isCheckedForQ5, setIsCheckedForQ5] = useState<boolean>(false);
  const [isCheckedForQ6, setIsCheckedForQ6] = useState<boolean>(false);
  const [isCheckedForQ7, setIsCheckedForQ7] = useState<boolean>(false);
  const [isCheckedForQ8, setIsCheckedForQ8] = useState<boolean>(false);
  
  let count =
  radioValues[27].one ||
  radioValues[27].two ||
  radioValues[27].three ||
  radioValues[27].four ||
  radioValues[27].five || radioValues[27].six || radioValues[27].seven || radioValues[27].eight;
  const dispatch = useAppDispatch();
  const handleClickOnMarriage = () => {
    setIsCheckedForQ1(!isCheckedForQ1);
    radioValues[27].one =!isCheckedForQ1;
    setIsCheckedForQ8(false);
    radioValues[27].eight = false;
  };
  const handleClickOnBusyWork = () => {
    setIsCheckedForQ2(!isCheckedForQ2);
    radioValues[27].two = !isCheckedForQ2;
    setIsCheckedForQ8(false);
    radioValues[27].eight = false;
  };
  const handleClickOnFinancialStruggles = () => {
    setIsCheckedForQ3(!isCheckedForQ3);
    radioValues[27].three = !isCheckedForQ3;
    setIsCheckedForQ8(false);
    radioValues[27].eight = false;
  };
  const handleClickOnInjury = () => {
    setIsCheckedForQ4(!isCheckedForQ4);
    radioValues[27].four = !isCheckedForQ4;
    setIsCheckedForQ8(false);
    radioValues[27].eight = false;
  };
   const handleClickOnStress = () => {
     setIsCheckedForQ5(!isCheckedForQ5);
     radioValues[27].five = !isCheckedForQ5;
     setIsCheckedForQ8(false);
    radioValues[27].eight = false;
   };
  const handleClickOnOld = () => {
    setIsCheckedForQ6(!isCheckedForQ6);
    radioValues[27].six =!isCheckedForQ6;
    setIsCheckedForQ8(false);
    radioValues[27].eight = false;
  };
  const handleClickOnTreatment = () => {
    setIsCheckedForQ7(!isCheckedForQ7);
    radioValues[27].seven = !isCheckedForQ7;
    setIsCheckedForQ8(false);
    radioValues[27].eight = false;
  };
  const handleClickOnNone = () => {
    console.log(!isCheckedForQ8)
    setIsCheckedForQ8(!isCheckedForQ8);
    radioValues[27].eight = !isCheckedForQ8;

    setIsCheckedForQ1(false);
    radioValues[27].one =false;

    setIsCheckedForQ2(false);
    radioValues[27].two = false;

    setIsCheckedForQ3(false);
    radioValues[27].three = false;

    setIsCheckedForQ4(false);
    radioValues[27].four = false;

    setIsCheckedForQ5(false);
     radioValues[27].five = false;

     setIsCheckedForQ5(false);
     radioValues[27].five = false;

     setIsCheckedForQ6(false);
    radioValues[27].six =false;

    setIsCheckedForQ7(false);
    radioValues[27].seven = false;


  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-3xl font-bold tracking-wide mt-7">
        Have any of the following <br /> life events led to weight <br /> gain in the last few years?
        </h1>
        <p className="text-gray-500 m-3">Choose all that apply</p>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <div>
          <Label
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfFemale/quiz-27th/marriage.webp"
              alt="lose-weight-img"
            />
            <h1 className="pr-[100px] font-semibold text-base ">Marriage or relationship</h1>
            <Checkbox
              className="mr-5 "
              id="r1"
              value="marriage"
              checked={radioValues[27].one}
              onCheckedChange={handleClickOnMarriage}
            />
          </Label>

          <Label
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-27th/busy-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[100px] font-semibold text-base">Busy work or family life</h1>
            <Checkbox
              className="mr-5"
              value="busy"
              id="r2"
              checked={radioValues[27].two}
              onCheckedChange={handleClickOnBusyWork}
            />
          </Label>

          <Label
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-27th/financial-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[140px] font-semibold text-base">Financial struggles</h1>
            <Checkbox
              className="mr-5"
              value="financial"
              id="r3"
              checked={radioValues[27].three}
              onCheckedChange={handleClickOnFinancialStruggles}
            />
          </Label>

          <Label
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-27th/injuries-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="pr-[140px] font-semibold text-base">Injury or disability</h1>
            <Checkbox
              className="mr-5"
              value="injury"
              id="r4"
              checked={radioValues[27].four}
              onCheckedChange={handleClickOnInjury}
            />
          </Label>

          <Label
            htmlFor="r5"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-27th/stress-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="pr-[40px] font-semibold text-base">Stress or mental health issues</h1>
            <Checkbox
              className="mr-5"
              value="stress"
              id="r5"
              checked={radioValues[27].five}
              onCheckedChange={handleClickOnStress}
            />
          </Label>
          <Label
            htmlFor="r6"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfFemale/quiz-27th/old-img.webp"
              alt="gain-muscle-img"
              
            />

            <h1 className="pr-[40px] font-semibold text-base">Slower metabolism due to aging</h1>
            <Checkbox
              className="mr-5"
              value="old"
              id="r6"
              checked={radioValues[27].six}
              onCheckedChange={handleClickOnOld}
            />
          </Label>
          <Label
            htmlFor="r7"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-27th/treatment-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="pr-[40px] font-semibold text-base">Post-treatment complications</h1>
            <Checkbox
              className="mr-5"
              value="treatment"
              id="r7"
              checked={radioValues[27].seven}
              onCheckedChange={handleClickOnTreatment}
            />
          </Label>
          <Label
            htmlFor="r8"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-27th/none-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="pr-[140px] font-semibold text-base">None of the above</h1>
            <Checkbox
              className="mr-5"
              value="none"
              id="r8"
              checked={radioValues[27].eight}
              onCheckedChange={handleClickOnNone}
            />
          </Label>
        </div>
      </div>

      <div className="p-[60px]"></div>

      <ButtonForQ4 num={count} />
    </div>
  );
};

export default QuizNo27;
