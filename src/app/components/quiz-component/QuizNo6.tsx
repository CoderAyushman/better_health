import React from "react";
import { radioValues } from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo6 = () => {
  const dispatch = useAppDispatch();
  const onClick0to6month = () => {
    radioValues[6] = "0-6month";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClicke7to12month = () => {
    radioValues[6] = "7-12month";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClick1to3year = () => {
    radioValues[6] = "1-3year";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickMoreThen3 = () => {
    radioValues[6] = "morethen3";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickNever = () => {
    radioValues[6] = "never";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How long ago were you in <br /> the best shape of your <br /> life?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[6]}>
          <Label
            onClick={onClick0to6month}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[140px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base  ">
              0 - 6 months ago
            </h1>
            <RadioGroupItem className="mr-5 " value="0-6month" id="r1" />
          </Label>

          <Label
            onClick={onClicke7to12month}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[140px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base ">
              7 - 12 months ago
            </h1>
            <RadioGroupItem className="mr-5" value="7-12month" id="r2" />
          </Label>
          <Label
            onClick={onClick1to3year}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[140px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base ">
              1 - 3 years ago
            </h1>
            <RadioGroupItem className="mr-5" value="1-3year" id="r3" />
          </Label>
          <Label
            onClick={onClickMoreThen3}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[110px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base ">
              More than 3 years ago
            </h1>
            <RadioGroupItem className="mr-5" value="morethen3" id="r3" />
          </Label>
          <Label
            onClick={onClickNever}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[140px] md:pr-[175px] pl-5 py-[30px] font-semibold text-base ">
              Never
            </h1>
            <RadioGroupItem className="mr-5" value="never" id="r3" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo6;
