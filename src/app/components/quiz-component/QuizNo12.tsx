import React from "react";
import radioValues from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";

const QuizNo12 = () => {
  const dispatch = useAppDispatch();
  const onClickAlmostEveryDay = () => {
    radioValues[12] = " Almost every day";
    dispatch(increse());
  };
  const onClickeSeveralTimesPerWeek = () => {
    radioValues[12] = "Several times per week";
    dispatch(increse());
  };
  const onClickSeveralTimesPerMonth = () => {
    radioValues[12] = "Several times per month";
    dispatch(increse());
  };
  const onClickNever = () => {
    radioValues[12] = "Never";
    dispatch(increse());
  };

  return (
    <div className="flex-col justify-center items-center">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How often do you <br /> workout?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[12]}>
          <Label
            onClick={onClickAlmostEveryDay}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base ">
              Almost every day
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value=" Almost every day"
              id="r1"
            />
          </Label>

          <Label
            onClick={onClickeSeveralTimesPerWeek}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              Several times per week
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="Several times per week"
              id="r2"
            />
          </Label>
          <Label
            onClick={onClickSeveralTimesPerMonth}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              Several times per month
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="Several times per month"
              id="r3"
            />
          </Label>
          <Label
            onClick={onClickNever}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              Never
            </h1>
            <RadioGroupItem className="mr-5" value="Never" id="r3" />
          </Label>
        </RadioGroup>
      </div>
      <Footer />
    </div>
  );
};

export default QuizNo12;
