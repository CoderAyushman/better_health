import React from "react";
import { useRadioValues } from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo12 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const handleUpdate = (index: number, value: any) => {
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const dispatch = useAppDispatch();
  const onClickTeaAndCoffee = () => {
    radioValues[12] = "I drink only coffee or tea";
    handleUpdate(12, "I drink only coffee or tea");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickeFewerThan2GlassesOfWater = () => {
    radioValues[12] = "I drink fewer than 2 glasses of water";
    handleUpdate(12, "I drink fewer than 2 glasses of water");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClick2to6GlassesOfWater = () => {
    radioValues[12] = "I drink 2-6 glasses of water (16-48 oz)";
    handleUpdate(12, "I drink 2-6 glasses of water (16-48 oz)");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClick7to10GlassesOfWater = () => {
    radioValues[12] = "I drink 7-10 glasses of water";
    handleUpdate(12, "I drink 7-10 glasses of water");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const onClickMoreThan10GlassesOfWater = () => {
    radioValues[12] = "I drink more than 10 glasses of water";
    handleUpdate(12, "I drink more than 10 glasses of water");
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };

  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7 max-w-[340px] md:max-w-[450px]">
          How much water do you drink throughout the day?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[12]}>
          <Label
            onClick={onClickTeaAndCoffee}
            htmlFor="r1"
            className="flex justify-between shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px] md:pr-[140px] pl-5 py-[30px] font-semibold text-base ">
              I only drink tea or coffee
            </h1>
            <RadioGroupItem
              className="mr-5 "
              value="I drink only coffee or tea"
              id="r1"
            />
          </Label>

          <Label
            onClick={onClickeFewerThan2GlassesOfWater}
            htmlFor="r2"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px] md:pr-[140px] pl-5 py-[30px] font-semibold text-base">
              Fewer than 2 glasses of water
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I drink fewer than 2 glasses of water"
              id="r2"
            />
          </Label>
          <Label
            onClick={onClick2to6GlassesOfWater}
            htmlFor="r3"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px] md:pr-[140px] pl-5 py-[30px] font-semibold text-base">
              2-6 glasses of water (16-48 oz)
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I drink 2-6 glasses of water (16-48 oz)"
              id="r3"
            />
          </Label>
          <Label
            onClick={onClick7to10GlassesOfWater}
            htmlFor="r3"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px] md:pr-[140px] pl-5 py-[30px] font-semibold text-base">
              7-10 glasses of water (56-80 oz)
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I drink 7-10 glasses of water"
              id="r3"
            />
          </Label>
          <Label
            onClick={onClickMoreThan10GlassesOfWater}
            htmlFor="r3"
            className="flex justify-between shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <h1 className="pr-[40px] md:pr-[140px] pl-5 py-[30px] font-semibold text-base">
              More than 10 glasses of water
            </h1>
            <RadioGroupItem
              className="mr-5"
              value="I drink more than 10 glasses of water"
              id="r3"
            />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default QuizNo12;
