import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo29 = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isRequireKG, setIsRequireKG] = useState(true);
  const [isRequireLBS, setIsRequireLBS] = useState(true);
  const [kg, setIskg] = useState < number > (radioValues[29].kg);
  const [Lbs, setIsLbs] = useState < number > (radioValues[29].lbs);
  const [bmi, setBmi] = useState < any > ();
  const [displayBmi, setDisplayBmi] = useState < any > ();

  useEffect(() => {
    if (radioValues[29].kg != null) {
      setIsRequireKG(false);
    }
  }, []);

  useEffect(() => {
    if (kg != null) {
      setBmi(Math.round(kg / Math.pow(radioValues[28].cm / 100, 2)));
      radioValues[29].bmi = Math.round(
        kg / Math.pow(radioValues[28].cm / 100, 2)
      );
    } else {
      setBmi(Math.round(Lbs / 2.20462 / Math.pow(radioValues[28].cm / 100, 2)));
      radioValues[29].bmi = Math.round(
        Lbs / 2.20462 / Math.pow(radioValues[28].cm / 100, 2)
      );
    }
  }, [kg, Lbs]);

  useEffect(() => {
    if (bmi <= 18) {
      setDisplayBmi(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md border-2 border-sky-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-28th/under-img.png"
                alt="bmi"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                Your BMI is {bmi} which is considered underweight
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              You have some work ahead of you, but it&apos;s great that you&apos;re taking
              this first step. We&apos;ll use your BMI to create a program just for
              you.
            </p>
          </div>
        </div>
      );
    } else if (bmi >= 19 && bmi <= 25) {
      setDisplayBmi(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-green-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-28th/normal-weight-img.png"
                alt="bmi"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                Your BMI is {bmi} which is considered normal
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              You&apos;re starting from a great place! Now we&apos;ll use your BMI to
              create a program tailored to your needs.
            </p>
          </div>
        </div>
      );
    } else if (bmi >= 26 && bmi <= 30) {
      setDisplayBmi(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-yellow-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-28th/over-weight-img.png"
                alt="bmi"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                Your BMI is {bmi} which is considered overweight
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              You have some work ahead of you, but it&apos;s great that you&apos;re taking
              this first step. We&apos;ll use your BMI to create a weight loss
              program just for you.
            </p>
          </div>
        </div>
      );
    } else {
      setDisplayBmi(
        <div className="flex justify-center items-center text-left mt-4">
          <div className="flex-col max-w-[400px] pb-2 pl-5 pr-5 pt-2 rounded-md  border-2 border-red-300">
            <div className="flex justify-start items-center">
              <img
                src="imageOfMale/quiz-28th/obese-img.png"
                alt="bmi"
                className="max-w-[50px] p-2 pl-0"
              />
              <h2 className="font-semibold">
                Your BMI is {bmi} which is considered obese
              </h2>
            </div>
            <p className="text-gray-400 text-base">
              There's a lot you could gain by losing a little weight. We&apos;ll use
              your BMI to create the weight loss program you need.
            </p>
          </div>
        </div>
      );
    }
  }, [bmi]);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increse());
    dispatch(increseDisplayCounter());
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
        radioValues[29].kg = e;
        radioValues[29].lbs = Math.round(e * 2.20462);
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
      radioValues[29].kg = LBS;
      radioValues[29].lbs = Math.round(LBS / 2.20462);
      setIskg(Math.round(LBS / 2.20462));
      setIsLbs(LBS);
      setIsRequireLBS(false);
    } else {
      setIsRequireLBS(true);
    }
  };
  return (
    <>
      <div className="flex-col justify-center items-center text-center mb-5">
        <h1 className="text-3xl font-bold tracking-wide mt-7 max-w-full">
          What is your <br />
          current weight?
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
        {!isRequireKG || !isRequireLBS ? <>{displayBmi}</> : <></>}
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

export default QuizNo29;
