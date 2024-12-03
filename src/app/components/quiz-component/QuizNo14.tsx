import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { CldImage } from "next-cloudinary";

const QuizNo14 = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const [isTrue, setIsTrue] = useState(false);
  const [isRequireCM, setIsRequireCM] = useState(true);
  const [isRequireFT, setIsRequireFT] = useState(true);
  const [ft, setFt] = useState<number>(radioValues[14].ft);
  const [cm, setCm] = useState<number>(radioValues[14].cm);

  useEffect(() => {
    if (radioValues[14].ft != null) {
      setIsRequireFT(false);
    }
  }, []);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  const handleCM = () => {
    setIsTrue(false);
  };
  const handleFT = () => {
    setIsTrue(true);
  };
  const handleOnChangeCM = (event: any) => {
    const CM = event.target.value;
    if (CM >= 90 && CM <= 243) {
      setRadioValues(prevValues => {
        const newValues = [...prevValues];
        newValues[14].cm = CM;
        newValues[14].ft = parseFloat((CM * 0.0328084).toFixed(1));
        return newValues;
      });
      console.log(radioValues[14].cm);
      console.log(radioValues[14].ft);
      setFt(parseFloat((CM * 0.0328084).toFixed(1)));
      setCm(radioValues[14].cm);
      setIsRequireCM(false);
    } else {
      setIsRequireCM(true);
    }
  };
  const handleOnChangeFT = (event: any) => {
    const FT = event.target.value;
    if (FT >= 3 && FT <= 7.11) {
      setRadioValues(prevValues => {
        const newValues = [...prevValues];
        newValues[14].ft = FT;
        newValues[14].cm = Math.round(FT * 30.48);
        return newValues;
      });
      setCm(Math.round(FT * 30.48));
      setFt(radioValues[14].ft);
      setIsRequireFT(false);
    } else {
      setIsRequireFT(true);
    }
  };
  return (
    <>
      <div className="flex-col justify-center items-center text-center mb-5">
        <h1 className="text-3xl font-bold tracking-wide mt-7 max-w-[340px] md:max-w-[450px]">
          What is your height?
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
                    defaultValue={cm}
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
              <div className="flex items-center">
                <div className="max-w-[200px] overflow-hidden   font-bold">
                  <div>
                    <Input
                      className="w-[230px] text-5xl "
                      type="number"
                      id="ft"
                      max={7.11}
                      min={3}
                      maxLength={4}
                      autoFocus
                      defaultValue={ft}
                      onChange={(e) => {
                        handleOnChangeFT(e);
                      }}
                    />
                  </div>
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
                <CldImage
                  width={500}
                  height={500}
                  src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/yk32llqwl6rd8xx1exb2"
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

export default QuizNo14;
