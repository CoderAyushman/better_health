import React from "react";
import { radioValues } from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

const QuizNo8 = () => {
  const dispatch = useAppDispatch();
  const onClickSitting = () => {
    radioValues[8] = "I spend most of the day sitting";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickeActive = () => {
    radioValues[8] = "I take active breaks";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickEasyFullActive = () => {
    radioValues[8] = "I'm on my feet all day long";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How would you describe <br /> your typical day?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[8]}>
          <Label
            onClick={onClickSitting}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-8th/svqmrudqkbdky5xcenis"
              alt="sitting-img"
            />
            <h1 className="pr-[40px] md:pr-[40px] font-semibold text-base ">
              I spend most of the day sitting
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value="I spend most of the day sitting"
              id="r1"
            />
          </Label>

          <Label
            onClick={onClickeActive}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-8th/zdfips8wtxzrmsagrn7d"
              alt="active-img"
            />

            <h1 className="pr-[40px] md:pr-[40px] font-semibold text-base">
              I take active breaks
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I take active breaks"
              id="r2"
            />
          </Label>
          <Label
            onClick={onClickEasyFullActive}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-8th/qkd83rz6iwk6nbnmvfd0"
              alt="fit-img"
            />

            <h1 className="pr-[40px] md:pr-[40px] font-semibold text-base">
              I&apos;m on my feet all day long
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I'm on my feet all day long"
              id="r3"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo8;
