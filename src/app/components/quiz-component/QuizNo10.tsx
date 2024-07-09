import React from "react";
import radioValues from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo10 = () => {
  const dispatch = useAppDispatch();
  const onClickTeaAndCoffee = () => {
    radioValues[10] = "tea&coffee";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickeFewerThan2GlassesOfWater = () => {
    radioValues[10] = "Fewer than 2 glasses of water";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClick2to6GlassesOfWater = () => {
    radioValues[10] = "2-6 glasses of water (16-48 oz)";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClick7to10GlassesOfWater = () => {
    radioValues[10] = "7-10 glasses of water";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickMoreThan10GlassesOfWater = () => {
    radioValues[10] = " More than 10 glasses of water";
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7">
          How much water do you <br /> drink throughout the day?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[10]}>
          <Label
            onClick={onClickTeaAndCoffee}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base ">
              I only drink tea or coffee
            </h1>
            <RadioGroupItem className="mr-5 " value="tea&coffee" id="r1" />
          </Label>

          <Label
            onClick={onClickeFewerThan2GlassesOfWater}
            htmlFor="r2"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              Fewer than 2 glasses of water
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="Fewer than 2 glasses of water"
              id="r2"
            />
          </Label>
          <Label
            onClick={onClick2to6GlassesOfWater}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              2-6 glasses of water (16-48 oz)
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="2-6 glasses of water (16-48 oz)"
              id="r3"
            />
          </Label>
          <Label
            onClick={onClick7to10GlassesOfWater}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              7-10 glasses of water (56-80 oz)
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="7-10 glasses of water"
              id="r3"
            />
          </Label>
          <Label
            onClick={onClickMoreThan10GlassesOfWater}
            htmlFor="r3"
            className="flex justify-between shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <h1 className="pl-[40px] pt-[30px] pb-[30px] font-semibold text-base">
              More than 10 glasses of water
            </h1>
            <RadioGroupItem
              className="mr-5"
              value=" More than 10 glasses of water"
              id="r3"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo10;
