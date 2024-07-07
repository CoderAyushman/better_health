import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import radioValues from "../RadioValues";

const WellnessProfile = () => {
  const [bmiValue, setBmiValue] = useState<any>();
  const bmi = radioValues[29].bmi;
  useEffect(() => {
    if (bmi <= 18 && bmi >= 10) setBmiValue(bmi - 10);
    else if (bmi >= 19 && bmi < 25) {
      setBmiValue(bmi - 2);
    } else if (bmi >= 26 && bmi <= 30) {
      setBmiValue(bmi + 5);
    } else if (bmi >= 31 && bmi <= 40) {
      setBmiValue(bmi + 10);
    } else if (bmi >= 50) {
      setBmiValue(50);
    } else if (bmi <= 9) {
      setBmiValue(0);
    } else {
      setBmiValue(bmi);
    }
  }, [bmi]);
  return (
    <div className="flex justify-center items-center mt-32 w-full">
      <div className="flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Here’s your wellness profile
        </h1>
        <div className="flex-col max-w-[600px] border border-gray-200 mt-5 rounded-md p-5 shadow-lg">
          <div className="flex justify-between gap-5">
            <h1 className="text-2xl font-bold">Body Mass Index (BMI)</h1>
            <p className="p-1 border border-gray-400 rounded-md  text-gray-400 font-bold mb-4">
              NORMAL - 21.5
            </p>
          </div>

          <div className="mt-16">
            <Slider value={[bmiValue]} max={50} step={1} />
            <div className="flex justify-between text-gray-400 text-sm font-bold mt-3">
              <span>UNDERWEIGHT</span>
              <span>NORMAL</span>
              <span>OVERWEIGHT</span>
              <span>OBESE</span>
            </div>
          </div>
          {/* obese */}
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
                High blood pressure, increased risk of heart attack, stroke,
                type 2 diabetes, chronic back and joint pain
              </p>
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
                High blood pressure, increased risk of heart attack, stroke,
                type 2 diabetes, chronic back and joint pain
              </p>
            </div>
          </div>
          {/* normal */}
          
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
        </div>
      </div>
    </div>
    
  );
};

export default WellnessProfile;
