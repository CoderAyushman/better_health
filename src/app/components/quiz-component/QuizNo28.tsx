import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";

const QuizNo28 = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isRequireCM, setIsRequireCM] = useState(true);
  const [isRequireFT, setIsRequireFT] = useState(true);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(increse());
  };
  const handleCM = () => {
    setIsTrue(false);
  };
  const handleFT = () => {
    setIsTrue(true);
  };
  const handleOnChangeCM = (event: any) => {
    const e = event.target.value;
    if (e >= 90 && e <= 243) {
      setIsRequireCM(false);
    } else {
      setIsRequireCM(true);
    }
  };
  const handleOnChangeFT = (ft: any) => {
    const FT = ft.target.value;

    if (FT >= 3 && FT <= 7) {
      setIsRequireFT(false);
    } else {
      setIsRequireFT(true);
    }
  };
  return (
    <>
      <div className="flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold tracking-wide mt-7 max-w-full">
          What is your <br />
          height?
        </h1>
        <div className="flex  justify-center items-center ">
          <div className="mt-10 border-[2px] border-customGreen rounded-full overflow-hidden">
            {isTrue ? (
              <button
                onClick={handleFT}
                className="pl-[25px] pr-[25px] text-center font-bold text-white bg-customGreen"
              >
                FT
              </button>
            ) : (
              <button
                onClick={handleFT}
                className="pl-[25px] pr-[25px] text-center font-bold text-customGreen"
              >
                FT
              </button>
            )}
            {isTrue == false ? (
              <button
                onClick={handleCM}
                className="pl-[25px] pr-[25px] text-center font-bold text-white bg-customGreen"
              >
                CM
              </button>
            ) : (
              <button
                onClick={handleCM}
                className="pl-[25px] pr-[25px] text-center font-bold text-customGreen"
              >
                CM
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
                    max={243}
                    min={90}
                    maxLength={3}
                    minLength={1}
                    autoFocus
                    onChange={(e) => {
                      handleOnChangeCM(e);
                    }}
                  />
                </div>
                <h1 className="font-bold text-2xl ">cm</h1>
              </div>
              {isRequireCM ? (
                <p className="text-xs mt-2">
                  Please, enter a value from <b>90 cm</b> to <b>243 cm</b>
                </p>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="flex-col">
              <div className="flex gap-3">
                <div className="max-w-[200px] overflow-hidden   font-bold">
                  <Input
                    className="w-[230px] text-5xl "
                    type="number"
                    id="ft"
                    max={7}
                    min={3}
                    maxLength={1}
                    autoFocus
                    onChange={(e) => {
                      handleOnChangeFT(e);
                    }}
                  />
                </div>
                <div className="max-w-[200px] overflow-hidden   font-bold">
                  <Input
                    className="w-[230px] text-5xl"
                    type="number"
                    id="inch"
                    max={11}
                    min={1}
                    maxLength={1}
                  />
                </div>
                <h1 className="font-bold text-2xl ">ft</h1>
              </div>
              {isRequireFT ? (
                <p className="text-xs mt-2">
                  Please, enter a value from <b> 3 ft</b> to <b>7 ft 11 in</b>
                </p>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
        {!isRequireCM || !isRequireFT ? (
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
          {!isRequireCM || !isRequireFT ? (
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

export default QuizNo28;
