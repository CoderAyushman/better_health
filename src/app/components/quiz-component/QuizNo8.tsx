import React from "react";
import radioValues from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";

const QuizNo8 = () => {
  const dispatch = useAppDispatch();
  const onClickSitting = () => {
    radioValues[8] = "sitting";
    dispatch(increse());
  };
  const onClickeActive = () => {
    radioValues[8] = "active";
    dispatch(increse());
  };
  const onClickEasyFullActive = () => {
    radioValues[8] = "fullactive";
    dispatch(increse());
  };

  return (
    <div className="flex-col justify-center items-center">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How does your weight <br /> typically change?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[8]}>
          <Label
            onClick={onClickSitting}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-8th/sitting-img.png"
              alt="sitting-img"
            />
            <h1 className="pr-[40px] font-semibold text-base ">
              I spend most of the day sitting
            </h1>
            <RadioGroupItem className="mr-5 " value="sitting" id="r1" />
          </Label>

          <Label
            onClick={onClickeActive}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-8th/active-img.png"
              alt="active-img"
            />

            <h1 className="pr-[40px] font-semibold text-base">
              I take active breaks
            </h1>
            <RadioGroupItem className="mr-5" value="active" id="r2" />
          </Label>
          <Label
            onClick={onClickEasyFullActive}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-8th/fit-img.png"
              alt="fit-img"
            />

            <h1 className="pr-[40px] font-semibold text-base">
              I'm on my feet all day long
            </h1>
            <RadioGroupItem className="mr-5" value="fullactive" id="r3" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo8;
