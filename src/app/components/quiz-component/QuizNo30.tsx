import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { kgtolbs, lbstokg } from "@/lib/features/counter/KgToLbsSlice";
import radioValues from "../RadioValues";

const QuizNo30 = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isRequireKG, setIsRequireKG] = useState(true);
  const [isRequireLBS, setIsRequireLBS] = useState(true);
  const [kg, setIskg] = useState<number>(radioValues[30].kg);
  const [Lbs, setIsLbs] = useState<number>(radioValues[30].lbs);
  const [benefits, setBenifits] = useState<any>();
  const [displayBenifits, setDisplayBenifits] = useState<any>();

  //logics
  //19*((165/100)*(165/100))
  //100-60/68*100

  useEffect(() => {
    if (radioValues[30].kg != null) {
      setIsRequireKG(false);
    }
  }, []);

  useEffect(() => {
    if (kg != null) {
      setBenifits(Math.round(100 - (kg / radioValues[29].kg) * 100));
    } else {
      setBenifits(Math.round(100 - (Lbs / 2.20462 / radioValues[29].kg) * 100));
    }
  }, [kg, Lbs]);

  useEffect(() => {
    if (
      kg <=
      Math.round(19 * ((radioValues[28].cm / 100) * (radioValues[28].cm / 100)))
    ) {
      setDisplayBenifits(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md border-2 border-red-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-30th/alert-q30-img.png"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">Uh-oh! Low weight alert!</h2>
            </div>
            <p className="text-gray-400 text-base">
              A normal weight range for your height is between{" "}
              {Math.round(
                19 * ((radioValues[28].cm / 100) * (radioValues[28].cm / 100))
              )}{" "}
              kg and{" "}
              {Math.round(
                25 * ((radioValues[28].cm / 100) * (radioValues[28].cm / 100))
              )}{" "}
              kg. Any weight below{" "}
              {Math.round(
                19 * ((radioValues[28].cm / 100) * (radioValues[28].cm / 100))
              )}{" "}
              kg is classified as underweight and is not recommended by World
              Health Organization.
            </p>
          </div>
        </div>
      );
    } else if (benefits >= 21) {
      setDisplayBenifits(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-green-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-30th/aim-q30-img.png"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                IT’S WORTH IT: lose {benefits}% of your <br /> weight
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              The Mayo Clinic conducted a study which found that overweight
              people who lose 20% or more of their body weight are more than
              twice as likely to show improved metabolic health as those who
              only lose 5-10%.
            </p>
          </div>
        </div>
      );
    } else if (benefits <= 0) {
      setDisplayBenifits(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-green-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-30th/aim-q30-img.png"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                GET MOVING: gain {benefits * -1}% of your <br /> weight
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              A study by the University of Utah found that working out just 5
              minutes per day can maintain your level of fitness, improve energy
              levels, and lead to better sleep.
            </p>
          </div>
        </div>
      );
    } else if (benefits > 0 && benefits <= 5) {
      setDisplayBenifits(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-green-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-30th/aim-q30-img.png"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                GET MOVING: lose {benefits}% of your weight
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              A study by the University of Utah found that working out just 5
              minutes per day can maintain your level of fitness, improve energy
              levels, and lead to better sleep.
            </p>
          </div>
        </div>
      );
    } else if (benefits > 5 && benefits <= 9) {
      setDisplayBenifits(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-green-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-30th/aim-q30-img.png"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                REALISTIC GOAL: lose {benefits}% of your weight
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              According to the CDC, burning off 4 kg per month is safe, healthy,
              and can reduce your risk of chronic health problems like type 2
              diabetes and heart disease.
            </p>
          </div>
        </div>
      );
    } else if (benefits >= 10 && benefits <= 20) {
      setDisplayBenifits(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-green-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-30th/aim-q30-img.png"
                alt="benefits"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                UNLOCK HEALTH BENEFITS: lose {benefits}% of your weight
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              Studies have shown that losing 10% or more of your body weight can
              reduce your risk of some obesity-related conditions, such as heart
              attacks, high blood sugar, and inflammation in your blood vessels.
            </p>
          </div>
        </div>
      );
    }
  }, [benefits]);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increse());
  };
  const handleKG = () => {
    setIsTrue(false);
  };
  const handleLBS = () => {
    setIsTrue(true);
  };
  const handleOnChangeKG = (event: any) => {
    const e = event.target.value;
    if (e >= 25 && e <= 300) {
      try {
        radioValues[30].kg = e;
        radioValues[30].lbs = Math.round(e * 2.20462);
        setIsLbs(Math.round(e * 2.20462));
        setIskg(e);
        setIsRequireKG(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      setIsRequireKG(true);
    }
  };
  const handleOnChangeLBS = (ft: any) => {
    const LBS = ft.target.value;

    if (LBS >= 55 && LBS <= 662) {
      radioValues[30].kg = LBS;
      radioValues[30].lbs = Math.round(LBS / 2.20462);
      setIskg(Math.round(LBS / 2.20462));
      setIsLbs(LBS);
      setIsRequireLBS(false);
    } else {
      setIsRequireLBS(true);
    }
  };
  return (
    <>
      <div className="flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold tracking-wide mt-7 max-w-full">
          What is your goal <br /> weight?
        </h1>
        <div className="flex  justify-center items-center ">
          <div className="mt-10 border-[2px] border-customGreen rounded-full overflow-hidden">
            {isTrue ? (
              <button
                onClick={handleLBS}
                className="pl-[25px] pr-[25px] text-center font-bold text-white bg-customGreen"
              >
                LBS
              </button>
            ) : (
              <button
                onClick={handleLBS}
                className="pl-[25px] pr-[25px] text-center font-bold text-customGreen"
              >
                LBS
              </button>
            )}
            {isTrue == false ? (
              <button
                onClick={handleKG}
                className="pl-[25px] pr-[25px] text-center font-bold text-white bg-customGreen"
              >
                KG
              </button>
            ) : (
              <button
                onClick={handleKG}
                className="pl-[25px] pr-[25px] text-center font-bold text-customGreen"
              >
                KG
              </button>
            )}
          </div>
        </div>
        <div className="flex  justify-center items-center mt-7 gap-3">
          {isTrue == false ? (
            <div className="flex-col">
              <div className="flex items-center">
                <div className="max-w-[200px] overflow-hidden mt-5  font-bold">
                  <Input
                    className="w-[230px] text-center text-5xl"
                    type="number"
                    id="cm"
                    max={300}
                    min={25}
                    maxLength={3}
                    minLength={1}
                    autoFocus
                    onChange={(e) => {
                      handleOnChangeKG(e);
                    }}
                    defaultValue={kg}
                  />
                </div>
                <h1 className="font-bold text-2xl ">kg</h1>
              </div>
              {isRequireKG ? (
                <p className="text-xs mt-2">
                  Please, enter a value from <b>25 kg</b> to <b>300 kg</b>
                </p>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="flex-col">
              <div className="flex items-center">
                <div className="max-w-[200px] overflow-hidden mt-5  font-bold">
                  {/* this div help to make diffrent input field */}
                  <div>
                    <Input
                      className="w-[230px] text-5xl text-center p-0"
                      type="number"
                      id="ft"
                      max={662}
                      min={55}
                      maxLength={1}
                      autoFocus
                      onChange={(e) => {
                        handleOnChangeLBS(e);
                      }}
                      defaultValue={Lbs}
                    />
                  </div>
                </div>

                <h1 className="font-bold text-2xl ">lbs</h1>
              </div>
              {isRequireLBS ? (
                <p className="text-xs mt-2">
                  Please, enter a value from <b>55 lbs</b> to <b>662 lbs</b>
                </p>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
        {!isRequireKG || !isRequireLBS ? <>{displayBenifits}</> : <></>}
        <div className="mb-5 mt-5">
          {!isRequireKG || !isRequireLBS ? (
            <button
              onClick={handleClick}
              className="cursor-pointer bg-customGreen pl-[130px] pr-[130px] pt-[15px] pb-[15px] rounded-full text-white  "
            >
              <h1>
                <b>NEXT STEP</b>
              </h1>
            </button>
          ) : (
            <button className="cursor-not-allowed  bg-gray-200 pl-[130px] pr-[130px] pt-[15px] pb-[15px] rounded-full text-gray-500  ">
              <h1>
                <b>NEXT STEP</b>
              </h1>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizNo30;
