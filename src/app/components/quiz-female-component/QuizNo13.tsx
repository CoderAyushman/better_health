"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "../RadioValues";
import { CldImage } from "next-cloudinary";

const QuizNo13 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const handleUpdate = (index: number, value: any) => {
    setRadioValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const dispatch = useAppDispatch();
  const handleClickOnTraditionalFood = () => {
    handleUpdate(13, "TraditionalFood");
    dispatch(increse());
  };
  const handleClickOnKeto = () => {
    handleUpdate(13, "keto food");
    dispatch(increse());
  };
  const handleClickOnVegeterian = () => {
    handleUpdate(13, "vegetarian");
    dispatch(increse());
  };
  const handleClickOnVegan = () => {
    handleUpdate(13, "vegan plantdiet");
    dispatch(increse());
  };
  const handleClickOnKetoVegan = () => {
    handleUpdate(13, "KetoVegan");
    dispatch(increse());
  };
  const handleClickOnPescatarian = () => {
    handleUpdate(13, "Pescatarian");
    dispatch(increse());
  };
  const handleClickOnLactoseFree = () => {
    handleUpdate(13, "Lactose Free");
    dispatch(increse());
  };
  const handleClickOnGlutenFree = () => {
    handleUpdate(13, "Gluten Free");
    dispatch(increse());
  };
  const handleClickOnPaleo = () => {
    handleUpdate(13, "Paleo");
    dispatch(increse());
  };
  const handleClickOnMediterranean = () => {
    handleUpdate(13, "Mediterranean");
    dispatch(increse());
  };
  return (
    <div className="flex-col justify-center items-center mb-5">
      <div className="flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-bold tracking-wide mt-7 max-w-[340px] md:max-w-[450px]">
          What type of diet do you prefer?
        </h1>
      </div>
      <div className="flex justify-evenly items-center  mt-5">
        <RadioGroup defaultValue={radioValues[13]}>
          <Label
            onClick={handleClickOnTraditionalFood}
            htmlFor="r1"
            className="flex justify-between  shadow-md rounded-xl border border-gray-200 items-center max-w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/frpubyld7yzayfr5up6l"
              alt="lose-weight-img"
            />
            <div>
              <h1 className="pr-[140px] font-semibold text-base ">
                Traditional
              </h1>
              <span className="text-gray-400">I enjoy everything</span>
            </div>
            <RadioGroupItem className="mr-5 " value="TraditionalFood" id="r1" />
          </Label>

          <Label
            onClick={handleClickOnKeto}
            htmlFor="r2"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/joqbeslw5q5lxcqw0udy"
              alt="gain-muscle-img"
            />

            <div>
              <h1 className="pr-[140px] font-semibold text-base ">Keto</h1>
              <span className="text-gray-400">
                I prefer high-fat low-carb meals
              </span>
            </div>
            <RadioGroupItem className="mr-5" value="keto food" id="r2" />
          </Label>
          <Label
            onClick={handleClickOnVegeterian}
            htmlFor="r3"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/bzmgaceqwccb1v8ixxut"
              alt="gain-muscle-img"
            />

            <div>
              <h1 className="pr-[140px] font-semibold text-base">Vegetarian</h1>
              <span className="text-gray-400">
                I prefer high-fat low-carb meals
              </span>
            </div>
            <RadioGroupItem className="mr-5" value="vegetarian" id="r3" />
          </Label>
          <Label
            onClick={handleClickOnVegan}
            htmlFor="r4"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/blncx9eres1za40d7a0i"
              alt="gain-muscle-img"
            />

            <div>
              <h1 className="pr-[90px] font-semibold text-base">
                Vegan (Plant Diet)
              </h1>
              <span className="text-gray-400">
                I do not eat animal products
              </span>
            </div>
            <RadioGroupItem className="mr-5" value="vegan plantdiet" id="r4" />
          </Label>
          <Label
            onClick={handleClickOnKetoVegan}
            htmlFor="r4"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/jdusicyms1s2tdmfrky9"
              alt="gain-muscle-img"
            />

            <div className="mr-[-32px] ">
              <h1 className="pr-[0px] font-semibold text-base">Keto Vegan</h1>
              <span className="text-gray-400">
                I eat low-carb plant-based meals only
              </span>
            </div>
            <RadioGroupItem className="mr-5" value="KetoVegan" id="r4" />
          </Label>
          <Label
            onClick={handleClickOnPescatarian}
            htmlFor="r4"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/aitvodnndoerxae5qtd3"
              alt="gain-muscle-img"
            />

            <div>
              <h1 className="pr-[130px] font-semibold text-base">
                Pescatarian
              </h1>
              <span className="text-gray-400">I avoid meat but enjoy fish</span>
            </div>
            <RadioGroupItem className="mr-5" value="Pescatarian" id="r4" />
          </Label>
          <Label
            onClick={handleClickOnLactoseFree}
            htmlFor="r4"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/q9qpzkmppd7zubgnjinj"
              alt="gain-muscle-img"
            />

            <div className="mr-[-22px] ">
              <h1 className="pr-[0px] font-semibold text-base">Lactose Free</h1>
              <span className="text-gray-400">
                I do not consume foods with lactose
              </span>
            </div>
            <RadioGroupItem className="mr-5" value="Lactose Free" id="r4" />
          </Label>
          <Label
            onClick={handleClickOnGlutenFree}
            htmlFor="r4"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/k5o2gesuvvzj1i24ovi3"
              alt="gain-muscle-img"
            />

            <div>
              <h1 className="pr-[0px] font-semibold text-base">Gluten Free</h1>
              <span className="text-gray-400">
                I avoid gluten-containing grains
              </span>
            </div>
            <RadioGroupItem className="mr-5" value="Gluten Free" id="r4" />
          </Label>
          <Label
            onClick={handleClickOnPaleo}
            htmlFor="r4"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/qtsa6zemea5puenxlsrk"
              alt="gain-muscle-img"
            />

            <div>
              <h1 className="pr-[180px] font-semibold text-base">Paleo</h1>
              <span className="text-gray-400">
                I don&apos;t eat processed foods
              </span>
            </div>
            <RadioGroupItem className="mr-5" value="Paleo" id="r4" />
          </Label>
          <Label
            onClick={handleClickOnMediterranean}
            htmlFor="r4"
            className="flex justify-between  shadow-md rounded-xl border  border-gray-200 items-center max-w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer mb-2"
          >
            <CldImage
              width={500}
              height={500}
              className="w-[104px] h-[104px]"
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/quiz-22nd/nwmv5ppygblcxp4x1p8k"
              alt="gain-muscle-img"
            />

            <div className="mr-[-42px] ">
              <h1 className="pr-[100px] md:pr-[170px] font-semibold text-base">
                Mediterranean
              </h1>
              <span className="text-gray-400">
                I eat plenty of veggies, grains and seafood
              </span>
            </div>
            <RadioGroupItem className="mr-5" value="Mediterranean" id="r4" />
          </Label>
        </RadioGroup>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default QuizNo13;
