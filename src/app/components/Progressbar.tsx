"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrease } from "@/lib/features/counter/counterSlice";
import radioValues from "./RadioValues";
import { decreaseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import quizes from "./Quizes";
// var dubQuizCounter=quizCounter;

const Progressbar = () => {
  const quizCounter: number = useAppSelector(
    (state) => state.diplayCounter.items
  );

  const [displayQuizCounter, setDisplayQuizCounter] =
    useState<any>(quizCounter);
  const dispatch = useAppDispatch();
  const handleBackArrowButton = () => {
    dispatch(decrease());
    
      dispatch(decreaseDisplayCounter());
    
    // if (
      
      // quizes[quizCounter] != quizes[23] ||
      // quizes[quizCounter] != quizes[29] ||
      // quizes[quizCounter] != quizes[34] ||
      // quizes[quizCounter] != quizes[36]
    // ) {
    //   dispatch(decreaseDisplayCounter());
    // }
  };

  // useEffect(() => {

  //   if(quizCounter>=23){
  //     setDisplayQuizCounter(quizCounter-1);
  //     if(quizCounter>=29){
  //       setDisplayQuizCounter(displayQuizCounter-1);
  //     }
  //   }
  //   else{
  //     setDisplayQuizCounter(quizCounter);
  //   }
  //   console.log(quizCounter, displayQuizCounter);
  // }, [quizCounter]);

  return (
    <>
      <div className="mt-32 flex justify-center items-center">
        <Progress
          value={quizCounter * 3.125}
          className="w-[463px] h-1 max-[450px]:w-[372px]"
        />
      </div>
      <div className="mt-3  flex justify-center items-center gap-[410px] max-[450px]:gap-[320px]">
        <button>
          <img
            onClick={handleBackArrowButton}
            className="w-[18px] "
            src="arrow.png"
            alt="arrow png"
          />
        </button>
        <span>
          <b className="text-customGreen">{quizCounter}</b>
          <b>/32</b>
        </span>
      </div>
    </>
  );
};

export default Progressbar;
