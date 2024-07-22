import React, {useState } from "react";
import {radioValues} from "../RadioValues";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";

const QuizNo26 = () => {
  const dispatch=useAppDispatch();

  const [isOne, setIsOne] = useState<boolean>(false);
  const [isTwo, setIsTwo] = useState<boolean>(false);
  const [isThree, setIsThree] = useState<boolean>(false);
  const [isFour, setIsFour] = useState<boolean>(false);
  const [isFive, setIsFive] = useState<boolean>(false);
  const handleOnclick1 = () => {
    radioValues[26] = "1";
    setIsOne(true);
    setIsFour(false);
    setIsFive(false); 
    setIsThree(false);
    setIsTwo(false);
    dispatch(increse())
    dispatch(increseDisplayCounter());
  };
  const handleOnclick2 = () => {
    radioValues[26] = "2";
    setIsTwo(true);
    setIsFour(false);
    setIsFive(false);
    setIsThree(false);
    setIsOne(false);
    dispatch(increse())
    dispatch(increseDisplayCounter());
  };
  const handleOnclick3 = () => {
    radioValues[26] = "3";
    setIsThree(true);
    setIsFour(false);
    setIsFive(false);
    setIsTwo(false);
    setIsOne(false);
    dispatch(increse())
    dispatch(increseDisplayCounter());
  };
  const handleOnclick4 = () => {
    radioValues[26] = "4";
    setIsFour(true);
    setIsFive(false);
    setIsThree(false);
    setIsTwo(false);
    setIsOne(false);
    dispatch(increse())
    dispatch(increseDisplayCounter());
  };
  const handleOnclick5 = () => {
    radioValues[26] = "5";
    setIsFive(true);
    setIsFour(false);
    setIsThree(false);
    setIsTwo(false);
    setIsOne(false);
    dispatch(increse())
    dispatch(increseDisplayCounter());
  };
  return (
    <div className="flex justify-center items-center mb-5">
      <div className="flex-col">
        <h1 className="text-3xl font-bold tracking-wide mt-7">
        I manage to keep up a <br /> healthy routine for a few <br /> weeks before slipping back <br /> into my old habits.
        </h1>
        <p className="text-black-300 mt-2">
          {" "}
          How much can you relate to this statement?
        </p>
        <div className="flex mt-5">
          <div className="flex-col cursor-pointer">
            <div
              className={`max-w-[150px]  mr-7 cursor-pointer rounded-md ${
                radioValues[26] == "1" || isOne
                  ? "bg-customGreen text-white"
                  : "bg-gray-100"
              }`}
            >
              <h1
                className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]"
                onClick={handleOnclick1}
              >
                1
              </h1>
            </div>
            <span className="text-sm text-center">Not at all</span>
          </div>
          <div>
            <div
              className={`max-w-[150px]  mr-7 cursor-pointer rounded-md ${
                radioValues[26] == "2" || isTwo
                  ? "bg-customGreen text-white"
                  : "bg-gray-100"
              }`}
            >
              <h1
                className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]"
                onClick={handleOnclick2}
              >
                2
              </h1>
            </div>
          </div>
          <div>
            <div
              className={`max-w-[150px]  mr-7 cursor-pointer rounded-md ${
                radioValues[26] == "3" || isThree
                  ? "bg-customGreen text-white"
                  : "bg-gray-100"
              }`}
            >
              <h1
                className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]"
                onClick={handleOnclick3}
              >
                3
              </h1>
            </div>
          </div>
          <div>
            <div
              className={`max-w-[150px]  mr-7 cursor-pointer rounded-md ${
                radioValues[26] == "4" || isFour
                  ? "bg-customGreen text-white"
                  : "bg-gray-100"
              }`}
            >
              <h1
                className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]"
                onClick={handleOnclick4}
              >
                4
              </h1>
            </div>
          </div>
          <div className="flex-col cursor-pointer">
            <div
              className={`max-w-[150px]  mr-7  rounded-md ${
                radioValues[26] == "5" || isFive
                  ? "bg-customGreen text-white"
                  : "bg-gray-100"
              }`}
            >
              <h1
                className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]"
                onClick={handleOnclick5}
              >
                5
              </h1>
            </div>
            <span className="text-sm text-center ml-1">Strongly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizNo26;
