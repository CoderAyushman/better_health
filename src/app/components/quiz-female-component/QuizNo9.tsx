import React from "react";
import { radioValues } from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo9 = () => {
  const dispatch = useAppDispatch();
  const onClickMinimalRest = () => {
    radioValues[9] = "less than 5 hours";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClicke5toghours = () => {
    radioValues[9] = "5to6hours";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClick7to8hours = () => {
    radioValues[9] = "7to8hours";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickMoreThen8hours = () => {
    radioValues[9] = "more then 8 hours";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How much sleep do you <br /> usually get?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[9]}>
          <Label
            onClick={onClickMinimalRest}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px]  pl-5 py-[30px] font-semibold text-base ">
              Minimal rest (less than 5 hours)
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value="less than 5 hours"
              id="r1"
            />
          </Label>

          <Label
            onClick={onClicke5toghours}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px]  pl-5 py-[30px] font-semibold text-base">
              I get some shut-eye (5-6 hours)
            </h1>
            <RadioGroupItem className="mr-5" value="5to6hours" id="r2" />
          </Label>
          <Label
            onClick={onClick7to8hours}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px]  pl-5 py-[30px] font-semibold text-base">
              I sleep long and well (7-8 hours)
            </h1>
            <RadioGroupItem className="mr-5" value="7to8hours" id="r3" />
          </Label>
          <Label
            onClick={onClickMoreThen8hours}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px]  pl-5 py-[30px] font-semibold text-base">
              I like to sleep in (more than 8 hours)
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="more then 8 hours"
              id="r3"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo9;
