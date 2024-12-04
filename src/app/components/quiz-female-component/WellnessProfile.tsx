import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { useRadioValues } from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CldImage } from "next-cloudinary";

const WellnessProfile = () => {

  const { radioValues, setRadioValues } = useRadioValues();
  const dispatch = useAppDispatch();
  const [bmiValue, setBmiValue] = useState<any>();
  const [bmiDisplay, setBmiDisplay] = useState<any>(false);
  const [bmiImage, setBmiImage] = useState<any>();
  const [bodyType, setBodyType] = useState<string>("");
  const [lifeStyle, setLifeStyle] = useState<string>("");
  const [fitnessLevel, setFitnessLevel] = useState<string>("");
  const [metabolism, setMetabolism] = useState<string>("");
  const [explain, setExplain] = useState<string>("");
  const bmi = radioValues[15].bmi;

  const handleOnclickButton = () => {
    dispatch(increse());
  };

  useEffect(() => {
    if (bmi <= 18 && bmi >= 10) {
      setBodyType("Ectomorph")
      setLifeStyle("Sedentary")
      setFitnessLevel("Beginner")
      setMetabolism("Low")
      setExplain("A person is called Ectomorph if they weigh less than what is healthy for their height.They may look very thin and have less body fat or muscle than needed.")
      setBmiValue(bmi - 10);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#FFE5E2]">
            <div className="flex justify-start items-center">
              <CldImage
                width={500}
                height={500}
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/rdxpyudinmneu34zykqa"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-bold">Risks of unhealthy BMI:</h2>
            </div>
            <p className="font-medium text-base text-[#fd725f]">
              Problems include osteoporosis, anemia, feeling tired, and more.
            </p>
          </div>
        </div>
      );
      setBmiImage(
        <CldImage
          width={500}
          height={500}
          className="w-[245px]"
          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/wellness-profile/sddspbgfs45fmpa1xgxo"
          alt=""
        />
      );
    } else if (bmi >= 19 && bmi <= 25) {
      setBodyType("Mesomorph")
      setLifeStyle("Sedentary")
      setFitnessLevel("Average")
      setMetabolism("Advanced")
      setExplain("A person is called Mesomorph if their weight is within a healthy range for their height.They may look healthy, have a healthy body fat percentage, and have a healthy body composition.")
      setBmiValue(bmi - 2);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#E0F6ED]">
            <div className="flex justify-start items-center">
              <CldImage
                width={500}
                height={500}
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/q3fgbto2f4lrmohlsg9o"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-bold">Healthy BMI:</h2>
            </div>
            <p className="font-medium text-base text-[#52bc90]">
              Good starting BMI to tone up and get your dream body
            </p>
          </div>
        </div>
      );
      setBmiImage(
        <CldImage
          width={500}
          height={500}
          className="w-[245px]"
          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/wellness-profile/hvbds7hgj0uk0dvmxtmr"
          alt=""
        />
      );
    } else if (bmi >= 26 && bmi <= 30) {
      setBodyType("Endomorph")
      setLifeStyle("Sedentary")
      setFitnessLevel("Intermediate")
      setMetabolism("Slower")
      setExplain("A person is called Endomorph if they weigh more than what is healthy for their height.They are not very heavy but may need to watch their weight to stay healthy.")
      setBmiValue(bmi + 5);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#FEF4E4]">
            <div className="flex justify-start items-center">
              <CldImage
                width={500}
                height={500}
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/zrk9jsgof51r7t8km0dd"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-bold">Risks of unhealthy BMI:</h2>
            </div>
            <p className="font-medium text-base text-[#e1931f]">
              High blood pressure, increased risk of heart attack, stroke, type
              2 diabetes, chronic back and joint pain
            </p>
          </div>
        </div>
      );
      setBmiImage(
        <CldImage
          width={500}
          height={500}
          className="w-[245px]"
          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/wellness-profile/zgk6aow3ez9bg5o3t9jv"
          alt=""
        />
      );
    } else if (bmi >= 31 && bmi <= 40) {
      setBodyType("Endomorph")
      setLifeStyle("Sedentary")
      setFitnessLevel("Low")
      setMetabolism("Slower")
      setExplain("A person is called Endomorph if they weigh more than what is healthy for their height.Obese people are much heavier than what is healthy for their height.")
      setBmiValue(bmi + 10);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#FFE5E2]">
            <div className="flex justify-start items-center">
              <CldImage
                width={500}
                height={500}
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/rdxpyudinmneu34zykqa"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-bold">Risks of unhealthy BMI:</h2>
            </div>
            <p className="font-medium text-base text-[#fd725f]">
              High blood pressure, increased risk of heart attack, stroke, type
              2 diabetes, chronic back and joint pain
            </p>
          </div>
        </div>
      );
      setBmiImage(
        <CldImage
          width={500}
          height={500}
          className="w-[245px]"
          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/wellness-profile/s8csd1rrjqm3mgh0uexd"
          alt=""
        />
      );
    } else if (bmi >= 40) {
      setBodyType("Endomorph")
      setLifeStyle("Sedentary")
      setFitnessLevel("Low")
      setMetabolism("Slower")
      setExplain("A person is called Endomorph if they weigh more than what is healthy for their height.Obese people are much heavier than what is healthy for their height.")
      setBmiValue(50);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#FFE5E2]">
            <div className="flex justify-start items-center">
              <CldImage
                width={500}
                height={500}
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/rdxpyudinmneu34zykqa"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-bold">Risks of unhealthy BMI:</h2>
            </div>
            <p className="font-medium text-base text-[#fd725f]">
              High blood pressure, increased risk of heart attack, stroke, type
              2 diabetes, chronic back and joint pain
            </p>
          </div>
        </div>
      );
      setBmiImage(
        <CldImage
          width={500}
          height={500}
          className="w-[245px]"
          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/wellness-profile/s8csd1rrjqm3mgh0uexd"
          alt=""
        />
      );
    } else if (bmi <= 9) {
      setBodyType("Ectomorph")
      setLifeStyle("Sedentary")
      setFitnessLevel("Beginner")
      setMetabolism("Low")
      setExplain("A person is called Ectomorph if they weigh less than what is healthy for their height.They may look very thin and have less body fat or muscle than needed.")
      setBmiValue(0);
      setBmiImage(
        <CldImage
          width={500}
          height={500}
          className="w-[245px]"
          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfFemale/wellness-profile/sddspbgfs45fmpa1xgxo"
          alt=""
        />
      );
    } else {
      setBmiValue(bmi);
    }
  }, [bmi]);
  return (
    <div className="flex justify-center items-center mt-32 w-full mb-10">
      <div className="flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold text-center max-w-[340px] md:max-w-[450px] mx-auto">
          Here&apos;s your wellness profile
        </h1>
        <div className="flex-col max-w-[600px] border border-gray-200 mt-5 rounded-md p-5 shadow-xl">
          <div className="flex justify-between gap-5">
            <h1 className="text-2xl font-bold">Body Mass Index (BMI)</h1>
            <p className="p-1 border border-gray-400 rounded-md  text-gray-400 font-bold mb-4">
              NORMAL - 21.5
            </p>
          </div>

          <div className="mt-[75px]">
            <Slider
              value={[bmiValue]}
              max={50}
              step={1}
              className="max-w-full"
            />
            <div className="flex justify-between text-gray-400 text-xs md:text-sm font-bold mt-3">
              <span>UNDERWEIGHT</span>
              <span>NORMAL</span>
              <span>OVERWEIGHT</span>
              <span>OBESE</span>
            </div>
          </div>

          {bmiDisplay ? bmiDisplay : <></>}
        </div>
        <div className="flex justify-center items-center max-w-[600px] border border-gray-200 mt-5 rounded-md p-5 shadow-2xl">
          <div className="flex-col justify-center items-center">
            <div className="flex justify-start items-center">
              <CldImage
                width={500}
                height={500}
                className="max-w-[50px] p-2 pl-0"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/s5a3esqjp05jlgvmczcx"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-gray-500">Body type</h1>
                <span className="flex font-bold justify-center items-center">
                  {bodyType}{" "}
                  <Dialog>
                    <DialogTrigger>
                      <button className="h-4 w-4 text-center text-xs ml-1 bg-gray-400 text-white rounded-full ">
                        i
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{bodyType}</DialogTitle>
                        <DialogDescription>
                          {explain}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <CldImage
                width={500}
                height={500}
                className="max-w-[50px] p-2 pl-0"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/m5fwqhw8kmhjxaruteut"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-gray-500">Lifestyle</h1>
                <span className="font-bold ">{lifeStyle}</span>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <CldImage
                width={500}
                height={500}
                className="max-w-[50px] p-2 pl-0"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/zfi4djmmg52rarzhzmks"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-gray-500">Fitness level</h1>
                <span className="font-bold ">{fitnessLevel}</span>
              </div>
            </div>
            <div className="flex justify-start items-center ">
              <CldImage
                width={500}
                height={500}
                className="max-w-[50px] p-2 pl-0"
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/imageOfMale/wellness-profile/xxa3v98a4vraz1i8zbgv"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-gray-500">Metabolism</h1>
                <span className="font-bold ">
                  {metabolism}
                </span>
              </div>
            </div>
          </div>
          <div></div>
          <div className="max-w-[245px]">{bmiImage}</div>
        </div>
        <div className=" flex justify-center items-center mt-5  mb-5   ">
          <button
            className="bg-customGreen pt-3 pb-3 pl-[110px] pr-[110px] rounded-full text-white font-bold fixed bottom-5 z-10"
            onClick={handleOnclickButton}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellnessProfile;
