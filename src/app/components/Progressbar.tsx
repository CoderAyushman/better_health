"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrease } from "@/lib/features/counter/counterSlice";
const Progressbar = () => {
  const quizCounter = useAppSelector((state) => state.counter.items);
 
  const dispatch = useAppDispatch();
  const handleBackArrowButton = () => {
    dispatch(decrease());
  };
  let displayQuizCounter=quizCounter;
  if(quizCounter >= 23 ){
    displayQuizCounter=displayQuizCounter-1
    console.log(quizCounter)
  }

  // if(quizCounter >= 29 ){
  //   console.log(quizCounter)
  //   displayQuizCounter=displayQuizCounter-1
  // }
  
  
  return (
    <>
      <div className="mt-32 flex justify-center items-center">
        <Progress
          value={quizCounter * 3.03}
          className="w-[463px] h-1 max-[450px]:w-[372px]"
        />
      </div>
      <div className="mt-3  flex justify-center items-center gap-[410px] max-[450px]:gap-[320px]">
        <button>
          <img
            onClick={handleBackArrowButton}
            className="w-[18px]  "
            src="arrow.png"
            alt="arrow png"
          />
        </button>
        <span>
          <b className="text-customGreen">
            {displayQuizCounter >=29?displayQuizCounter-1:displayQuizCounter}
          </b>
          <b>/33</b>
        </span>
      </div>
    </>
  );
};

export default Progressbar;
