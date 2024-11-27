"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
// import { RadioGroupItem } from "@/components/ui/checkbox";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import ButtonForQ4 from "./ButtonForQ4";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { CldImage } from "next-cloudinary";

const QuizNo32 = () => {
  // const [counter, setCounter] = useState<number>(0);

  const dispatch = useAppDispatch();
  const handleClickOnMarriage = () => {
    radioValues[32] = "Vacation";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnBusyWork = () => {
    radioValues[32] = "Competition";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnFinancialStruggles = () => {
    radioValues[32] = "Important date";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnInjury = () => {
    radioValues[32] = "Outdoor adventure";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnStress = () => {
    radioValues[32] = "Birthday";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnOld = () => {
    radioValues[32] = "holiday";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnTreatment = () => {
    radioValues[32] = "reuniun";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  const handleClickOnFamily = () => {
    radioValues[32] = "family";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnWedding = () => {
    radioValues[32] = "wedding";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleClickOnOther = () => {
    radioValues[32] = "other";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  const handleClickOnNone = () => {
    radioValues[32] = "none";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-3xl font-bold tracking-wide mt-7">
          Do you have any <br /> important event coming <br /> up?
        </h1>
        <p className="text-gray-500 m-3">
          Having something to look forward to can be a great <br /> motivator
          for reaching your goal
        </p>
      </div>
      <div className="flex justify-evenly items-center text-center mt-5">
        <div>
          <RadioGroup defaultValue={radioValues[32]}>
            <Label
              onClick={handleClickOnMarriage}
              htmlFor="r1"
              className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/dyc4stppg62x3h7fame7"
                alt="lose-weight-img"
              />
              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base ">
                Vacation
              </h1>
              <RadioGroupItem className="mr-5 " id="r1" value="Vacation" />
            </Label>

            <Label
              htmlFor="r2"
              onClick={handleClickOnBusyWork}
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/tz5cickcotrjivrynaq6"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Competition
              </h1>
              <RadioGroupItem className="mr-5" value="Competition" id="r2" />
            </Label>

            <Label
              htmlFor="r3"
              onClick={handleClickOnFinancialStruggles}
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/nxq0ts1dlyb6jfyjkgmt"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Important date
              </h1>
              <RadioGroupItem className="mr-5" value="Important date" id="r3" />
            </Label>

            <Label
              htmlFor="r4"
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
              onClick={handleClickOnInjury}
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/hcdf6qvdzu4fxaqh3drs"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Outdoor adventure
              </h1>
              <RadioGroupItem
                className="mr-5"
                value="Outdoor adventure"
                id="r4"
              />
            </Label>

            <Label
              htmlFor="r5"
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
              onClick={handleClickOnStress}
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/ends1rjzqhewkeejfizn"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Birthday
              </h1>
              <RadioGroupItem className="mr-5" value="Birthday" id="r5" />
            </Label>
            <Label
              htmlFor="r6"
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
              onClick={handleClickOnOld}
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/mr9wysi8lvmua2ovgurq"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Holiday
              </h1>
              <RadioGroupItem className="mr-5" value="holiday" id="r6" />
            </Label>
            <Label
              htmlFor="r7"
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
              onClick={handleClickOnTreatment}
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/ywzh1vaqo4srprhwbllx"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Reuniun
              </h1>
              <RadioGroupItem className="mr-5" value="reuniun" id="r7" />
            </Label>
            <Label
              htmlFor="r8"
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
              onClick={handleClickOnFamily}
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/ie0bqms0klzq3vs9m30g"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Family Occasion
              </h1>
              <RadioGroupItem className="mr-5" value="family" id="r8" />
            </Label>
            <Label
              htmlFor="r9"
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
              onClick={handleClickOnWedding}
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/w4izx4a7lqvpkpere518"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Wedding
              </h1>
              <RadioGroupItem className="mr-5" value="wedding" id="r9" />
            </Label>
            <Label
              htmlFor="r10"
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
              onClick={handleClickOnOther}
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px]"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/j0ujhuj8ddwnwh5x6x9j"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                Other
              </h1>
              <RadioGroupItem className="mr-5" value="other" id="r10" />
            </Label>
            <Label
              htmlFor="r11"
              className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mt-5"
              onClick={handleClickOnNone}
            >
              <CldImage
                width={500}
                height={500}
                className="w-[104px] h-[104px] "
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-32nd/izfrnywixxpu8b91fb6w"
                alt="gain-muscle-img"
              />

              <h1 className="pr-[100px] md:pr-[175px] font-semibold text-base">
                No special events any time soon
              </h1>
              <RadioGroupItem className="mr-5" value="none" id="r11" />
            </Label>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default QuizNo32;
