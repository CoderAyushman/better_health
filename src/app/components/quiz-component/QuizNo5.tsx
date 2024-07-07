import React from "react";
import radioValues from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";

const QuizNo5 = () => {
  const dispatch = useAppDispatch();
  const onClickHardGain = () => {
    radioValues[5] = "hardgain";
    dispatch(increse());
  };
  const onClickeEasyLoss = () => {
    radioValues[5] = "easyloss";
    dispatch(increse());
  };
  const onClickEasyGainHardLoss = () => {
    radioValues[5] = "easygainhardloss";
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
        <RadioGroup defaultValue={radioValues[5]}>
          <Label
            onClick={onClickHardGain}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-5th/upper-eyes-emoji.png"
              alt="lose-weight-img"
            />
            <h1 className="pr-[40px] font-semibold text-base ">
              I have trouble gaining muscle or body fat
            </h1>
            <RadioGroupItem className="mr-5 " value="hardgain" id="r1" />
          </Label>

          <Label
            onClick={onClickeEasyLoss}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-5th/biceps-emoji.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[40px] font-semibold text-base">
              I gain and lose weight without effort
            </h1>
            <RadioGroupItem className="mr-5" value="easyloss" id="r2" />
          </Label>
          <Label
            onClick={onClickEasyGainHardLoss}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-5th/fear-emoji.png"
              alt="gain-muscle-img"
            />

            <h1 className="pr-[40px] font-semibold text-base">
              I gain weight easily but find it hard to lose
            </h1>
            <RadioGroupItem className="mr-5" value="easygainhardloss" id="r3" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo5;
