"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";
import ButtonForQ4 from "./ButtonForQ4";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const QuizNo32 = () => {
  // const [counter, setCounter] = useState<number>(0);
  const [isCheckedForQ1, setIsCheckedForQ1] = useState<boolean>(false);
  const [isCheckedForQ2, setIsCheckedForQ2] = useState<boolean>(false);
  const [isCheckedForQ3, setIsCheckedForQ3] = useState<boolean>(false);
  const [isCheckedForQ4, setIsCheckedForQ4] = useState<boolean>(false);
  const [isCheckedForQ5, setIsCheckedForQ5] = useState<boolean>(false);
  const [isCheckedForQ6, setIsCheckedForQ6] = useState<boolean>(false);
  const [isCheckedForQ7, setIsCheckedForQ7] = useState<boolean>(false);
  const [isCheckedForQ8, setIsCheckedForQ8] = useState<boolean>(false);
  const [isCheckedForQ9, setIsCheckedForQ9] = useState<boolean>(false);
  const [isCheckedForQ10, setIsCheckedForQ10] = useState<boolean>(false);
  const [isCheckedForQ11, setIsCheckedForQ11] = useState<boolean>(false);
  
  let count =
  radioValues[32].one ||
  radioValues[32].two ||
  radioValues[32].three ||
  radioValues[32].four ||
  radioValues[32].five || radioValues[32].six || radioValues[32].seven || radioValues[32].eight || radioValues[32].nine || radioValues[32].ten || radioValues[32].eleven ;
  const dispatch = useAppDispatch();
  const handleClickOnMarriage = () => {
    setIsCheckedForQ1(!isCheckedForQ1);
    radioValues[32].one =!isCheckedForQ1;
  };
  const handleClickOnBusyWork = () => {
    setIsCheckedForQ2(!isCheckedForQ2);
    radioValues[32].two = !isCheckedForQ2;
  };
  const handleClickOnFinancialStruggles = () => {
    setIsCheckedForQ3(!isCheckedForQ3);
    radioValues[32].three = !isCheckedForQ3;
  };
  const handleClickOnInjury = () => {
    setIsCheckedForQ4(!isCheckedForQ4);
    radioValues[32].four = !isCheckedForQ4;
  };
   const handleClickOnStress = () => {
     setIsCheckedForQ5(!isCheckedForQ5);
     radioValues[32].five = !isCheckedForQ5;
   };
  const handleClickOnOld = () => {
    setIsCheckedForQ6(!isCheckedForQ6);
    radioValues[32].six =!isCheckedForQ6;
  };
  const handleClickOnTreatment = () => {
    setIsCheckedForQ7(!isCheckedForQ7);
    radioValues[32].seven = !isCheckedForQ7;
  };
  
  const handleClickOnFamily = () => {
    setIsCheckedForQ8(!isCheckedForQ8);
    console.log(!isCheckedForQ8)
    radioValues[32].eight = !isCheckedForQ8;
  };
  const handleClickOnWedding = () => {
    setIsCheckedForQ8(!isCheckedForQ9);
    console.log(!isCheckedForQ9)
    radioValues[32].nine = !isCheckedForQ9;
  };
  const handleClickOnOther = () => {
    setIsCheckedForQ8(!isCheckedForQ10);
    console.log(!isCheckedForQ10)
    radioValues[32].ten = !isCheckedForQ10;
  };
 
  const handleClickOnNone = () => {
    setIsCheckedForQ11(!isCheckedForQ11);
    console.log(!isCheckedForQ8)
    radioValues[32].eleven = !isCheckedForQ11;
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-3xl font-bold tracking-wide mt-7">
        Do you have any <br /> important event coming <br /> up?
        </h1>
        <p className="text-gray-500 m-3">Having something to look forward to can be a great <br /> motivator for reaching your goal</p>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <div>
          <Label
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/vacation-img.png"
              alt="lose-weight-img"
            />
            <h1 className="text-center font-semibold text-base ">Vacation</h1>
            <Checkbox
              className="mr-5 "
              id="r1"
              value="Vacation"
              checked={radioValues[32].one}
              onCheckedChange={handleClickOnMarriage}
            />
          </Label>

          <Label
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/competition-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="text-center font-semibold text-base">Competition</h1>
            <Checkbox
              className="mr-5"
              value="Competition"
              id="r2"
              checked={radioValues[32].two}
              onCheckedChange={handleClickOnBusyWork}
            />
          </Label>

          <Label
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/important-img.png"
              alt="gain-muscle-img"
            />

            <h1 className="text-center font-semibold text-base">Important date</h1>
            <Checkbox
              className="mr-5"
              value="Important date"
              id="r3"
              checked={radioValues[32].three}
              onCheckedChange={handleClickOnFinancialStruggles}
            />
          </Label>

          <Label
            htmlFor="r4"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/adventures-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="text-center font-semibold text-base">Outdoor adventure</h1>
            <Checkbox
              className="mr-5"
              value="Outdoor adventure"
              id="r4"
              checked={radioValues[32].four}
              onCheckedChange={handleClickOnInjury}
            />
          </Label>

          <Label
            htmlFor="r5"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/birthday-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="text-center font-semibold text-base">Birthday</h1>
            <Checkbox
              className="mr-5"
              value="Birthday"
              id="r5"
              checked={radioValues[32].five}
              onCheckedChange={handleClickOnStress}
            />
          </Label>
          <Label
            htmlFor="r6"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/holiday-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="text-center font-semibold text-base">Holiday</h1>
            <Checkbox
              className="mr-5"
              value="holiday"
              id="r6"
              checked={radioValues[32].six}
              onCheckedChange={handleClickOnOld}
            />
          </Label>
          <Label
            htmlFor="r7"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/reunion-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="text-center font-semibold text-base">Reuniun</h1>
            <Checkbox
              className="mr-5"
              value="reuniun"
              id="r7"
              checked={radioValues[32].seven}
              onCheckedChange={handleClickOnTreatment}
            />
          </Label>
          <Label
            htmlFor="r8"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/family-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="text-center font-semibold text-base">Family Occasion</h1>
            <Checkbox
              className="mr-5"
              value="family"
              id="r8"
              checked={radioValues[32].eight}
              onCheckedChange={handleClickOnFamily}
            />
          </Label>
          <Label
            htmlFor="r9"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/wedding-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="text-center font-semibold text-base">Wedding</h1>
            <Checkbox
              className="mr-5"
              value="wedding"
              id="r9"
              checked={radioValues[32].nine}
              onCheckedChange={handleClickOnWedding}
            />
          </Label>
          <Label
            htmlFor="r10"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/other-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="text-center font-semibold text-base">Other</h1>
            <Checkbox
              className="mr-5"
              value="other"
              id="r10"
              checked={radioValues[32].ten}
              onCheckedChange={handleClickOnOther}
            />
          </Label>
          <Label
            htmlFor="r11"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-32nd/nospecial-img.png"
              alt="gain-muscle-img"
              
            />

            <h1 className="text-center font-semibold text-base">No special events any time soon</h1>
            <Checkbox
              className="mr-5"
              value="none"
              id="r11"
              checked={radioValues[32].eleven}
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

export default QuizNo32;
