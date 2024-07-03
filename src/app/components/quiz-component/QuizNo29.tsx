import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { kgtolbs, lbstokg } from "@/lib/features/counter/KgToLbsSlice";

const QuizNo29 = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isRequireKG, setIsRequireKG] = useState(true);
  const [isRequireLBS, setIsRequireLBS] = useState(true);
  const [kg, setIskg] = useState<number>();
  const [Lbs, setIsLbs] = useState<number>();

  const dispatch = useAppDispatch();
  // const KgOrLbs = useAppSelector((state) => state.kgtolbs.items);

  //  if(KgOrLbs[0]!=0){
  //   console.log(KgOrLbs)
  //   setIskg(KgOrLbs[0]);
  //   setIsLbs(KgOrLbs[1])
  //  }
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
        setIsLbs(Math.round(e * 2.20462));
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
      //  dispatch(lbstokg(LBS));
      setIskg(Math.round(LBS/2.20462));
      setIsRequireLBS(false);
    } else {
      setIsRequireLBS(true);
    }
  };
  return (
    <>
      <div className="flex-col justify-center items-center text-center">
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
        {!isRequireKG || !isRequireLBS ? (
          <div className="flex justify-center items-center text-left mt-4">
            <div className="flex-col max-w-[335px] pb-2 pl-5 pr-5 pt-2 rounded-md border border-gray-200">
              <div className="flex justify-start items-center">
                <img
                  src="calculating-bmi-img.png"
                  alt="bmi"
                  className="max-w-[50px] p-2 pl-0"
                />
                <h2 className="font-semibold">Calculating your BMI</h2>
              </div>
              <p className="text-gray-400 text-base">
                Body mass index (BMI) is a metric of body fat percentage
                commonly used to estimate risk levels of potential health
                problems.
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
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
