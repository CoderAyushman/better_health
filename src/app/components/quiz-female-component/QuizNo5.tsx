import React from "react";
import { radioValues } from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

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
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-5th/uajivt3gkwbfp7mv284a"
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
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-5th/a1a5hfm1ydtyjtch4fsm"
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
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-5th/fhskdkf1toh0i4m38cvd"
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
