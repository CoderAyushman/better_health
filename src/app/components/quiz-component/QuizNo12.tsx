import React from "react";
import { radioValues } from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo12 = () => {
  const dispatch = useAppDispatch();
  const onClickAlmostEveryDay = () => {
    radioValues[12] = "I do workout every day";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickeSeveralTimesPerWeek = () => {
    radioValues[12] = "I do workout several times per week";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickSeveralTimesPerMonth = () => {
    radioValues[12] = "I do workout several times per month";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickNever = () => {
    radioValues[12] = "I dont workout";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
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
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[140px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base ">
              Almost every day
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value="I do workout every day"
              id="r1"
            />
          </Label>

          <Label
            onClick={onClickeSeveralTimesPerWeek}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[140px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base">
              Several times per week
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I do workout several times per week"
              id="r2"
            />
          </Label>
          <Label
            onClick={onClickSeveralTimesPerMonth}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[140px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base">
              Several times per month
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I do workout several times per month"
              id="r3"
            />
          </Label>
          <Label
            onClick={onClickNever}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[140px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base">
              Never
            </h1>
            <RadioGroupItem className="mr-5" value="I dont workout" id="r3" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo12;
