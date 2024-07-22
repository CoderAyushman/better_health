import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import {radioValues} from "../RadioValues";
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

const WellnessProfile = () => {
  const dispatch = useAppDispatch();
  const [bmiValue, setBmiValue] = useState<any>();
  const [bmiDisplay, setBmiDisplay] = useState<any>(false);
  const [bmiImage, setBmiImage] = useState<any>();
  const bmi = radioValues[29].bmi;

  const handleOnclickButton = () => {
    dispatch(increse());
  };

  useEffect(() => {
    if (bmi <= 18 && bmi >= 10) {
      setBmiValue(bmi - 10);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#FFE5E2]">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/wellness-profile/danger-obese-img.png"
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
        <img
          className="max-w-[245px]"
          src="imageOfMale/wellness-profile/underweight-img.png"
          alt=""
        />
      );
    } else if (bmi >= 19 && bmi <=25) {
      setBmiValue(bmi - 2);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#E0F6ED]">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/wellness-profile/normal-icon.png"
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
        <img
          className="max-w-[245px]"
          src="imageOfMale/wellness-profile/normalweight-img.png"
          alt=""
        />
      );
    } else if (bmi >= 26 && bmi <= 30) {
      setBmiValue(bmi + 5);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#FEF4E4]">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/wellness-profile/over-weight-icon.png"
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
        <img
          className="max-w-[245px]"
          src="imageOfMale/wellness-profile/overweight-img.png"
          alt=""
        />
      );
    } else if (bmi >= 31 && bmi <= 40) {
      setBmiValue(bmi + 10);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#FFE5E2]">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/wellness-profile/danger-obese-img.png"
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
        <img
          className="max-w-[245px]"
          src="imageOfMale/wellness-profile/obeseweight-img.png"
          alt=""
        />
      );
    } else if (bmi >= 40) {
      setBmiValue(50);
      setBmiDisplay(
        <div className="flex justify-center items-center text-left mt-7">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  bg-[#FFE5E2]">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/wellness-profile/danger-obese-img.png"
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
        <img
          className="max-w-[245px]"
          src="imageOfMale/wellness-profile/obeseweight-img.png"
          alt=""
        />
      );
    } else if (bmi <= 9) {
      setBmiValue(0);
      setBmiImage(
        <img
          className="max-w-[245px]"
          src="imageOfMale/wellness-profile/underweight-img.png"
          alt=""
        />
      );
    } else {
      setBmiValue(bmi);
    }
  }, [bmi]);
  return (
    <div className="flex justify-center items-center mt-32 w-full mb-10">
      <div className="flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Here’s your wellness profile
        </h1>
        <div className="flex-col max-w-[600px] border border-gray-200 mt-5 rounded-md p-5 shadow-xl">
          <div className="flex justify-between gap-5">
            <h1 className="text-2xl font-bold">Body Mass Index (BMI)</h1>
            <p className="p-1 border border-gray-400 rounded-md  text-gray-400 font-bold mb-4">
              NORMAL - 21.5
            </p>
          </div>

          <div className="mt-[75px]">
            <Slider value={[bmiValue]} max={50} step={1} />
            <div className="flex justify-between text-gray-400 text-sm font-bold mt-3">
              <span>UNDERWEIGHT</span>
              <span>NORMAL</span>
              <span>OVERWEIGHT</span>
              <span>OBESE</span>
            </div>
          </div>

          {/* overweight */}
          {/* Body Type
              Ectomorph
              Slender, less fat percentage and muscle mass

              Lifestyle
              Sedentary

              Fitness level
              Advanced

              Metabolism
              Fast, difficult to gain muscle
              */}
          {bmiDisplay ? bmiDisplay : <></>}
        </div>
        <div className="flex justify-center items-center max-w-[600px] border border-gray-200 mt-5 rounded-md p-5 shadow-2xl">
          <div className="flex-col justify-center items-center">
            <div className="flex justify-start items-center">
              <img
                className="max-w-[50px] p-2 pl-0"
                src="imageOfMale/wellness-profile/bodytype-icon.png"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-gray-500">Body type</h1>
                <span className="flex font-bold justify-center items-center">
                  Ectomorph{" "}
                  <Dialog>
                    <DialogTrigger>
                      <button className="h-4 w-4 text-center text-xs ml-1 bg-gray-400 text-white rounded-full ">
                        i
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Ectomorph</DialogTitle>
                        <DialogDescription>
                          Slender, less fat percentage and muscle mass
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                className="max-w-[50px] p-2 pl-0"
                src="imageOfMale/wellness-profile/lifestyle-icon.png"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-gray-500">Lifestyle</h1>
                <span className="font-bold ">Sedentary</span>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <img
                className="max-w-[50px] p-2 pl-0"
                src="imageOfMale/wellness-profile/fitnesslevel-icon.png"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-gray-500">Fitness level</h1>
                <span className="font-bold ">Advanced</span>
              </div>
            </div>
            <div className="flex justify-start items-center ">
              <img
                className="max-w-[50px] p-2 pl-0"
                src="imageOfMale/wellness-profile/metabolism-icon.png"
                alt=""
              />
              <div>
                <h1 className="font-semibold text-gray-500">Metabolism</h1>
                <span className="font-bold ">
                  Fast, difficult to <br /> gain muscle
                </span>
              </div>
            </div>
          </div>
          <div></div>
          <div>{bmiImage}</div>
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
