import React from "react";
import {radioValues} from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo20 = () => {
  const dispatch = useAppDispatch();
  const onClick1to2Times = () => {
    radioValues[20] = "1 to 2 times";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClick3to4Times = () => {
    radioValues[20] = "3 to 4 times";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickMoreThen5times = () => {
    radioValues[20] = "more then 5 times";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How many times per <br /> week would you like to <br /> train?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[20]}>
          <Label
            onClick={onClick1to2Times}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base ">
              1-2 times
            </h1>
            <RadioGroupItem className="mr-5 " value="1 to 2 times" id="r1" />
          </Label>

          <Label
            onClick={onClick3to4Times}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              3-4 times
            </h1>
            <RadioGroupItem className="mr-5" value="3 to 4 times" id="r2" />
          </Label>
          <Label
            onClick={onClickMoreThen5times}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              5+ times
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="more then 5 times"
              id="r3"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo20;
