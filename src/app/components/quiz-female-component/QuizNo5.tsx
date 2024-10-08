import React from "react";
import { radioValues } from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo5 = () => {
  const dispatch = useAppDispatch();
  const onClickHardGain = () => {
    radioValues[5] = "I have trouble gaining muscle or body fat";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickeEasyLoss = () => {
    radioValues[5] = "I gain and lose weight without effort";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickEasyGainHardLoss = () => {
    radioValues[5] = "I gain weight easily but find it hard to lose";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How does your weight <br /> typically change?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[5]}>
          <Label
            onClick={onClickHardGain}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-5th/upper-eyes-emoji.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[40px] font-semibold text-base ">
              I have trouble gaining muscle or body fat
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value="I have trouble gaining muscle or body fat"
              id="r1"
            />
          </Label>

          <Label
            onClick={onClickeEasyLoss}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-5th/biceps-emoji.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[40px] font-semibold text-base">
              I gain and lose weight without effort
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I gain and lose weight without effort"
              id="r2"
            />
          </Label>
          <Label
            onClick={onClickEasyGainHardLoss}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-5th/fear-emoji.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[40px] font-semibold text-base">
              I gain weight easily but find it hard to lose
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I gain weight easily but find it hard to lose"
              id="r3"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo5;
