"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { decrease } from "@/lib/features/counter/counterSlice";
const Progressbar = () => {
  // const [quizCounter,setQuizCounter]=useState<number>(1);
  const quizCounter=useAppSelector((state)=> state.counter.items);
  const dispatch=useAppDispatch();
  const handleBackArrowButton=()=>{
 dispatch(decrease());
  }
  return (
    <>
      <div className="mt-32 flex justify-center items-center">
        <Progress value={(quizCounter)* 3.03} className="w-[463px] h-1 max-[450px]:w-[372px]" />
      </div>
      <div className="mt-3  flex justify-center items-center gap-[410px] max-[450px]:gap-[320px]">
        <button>
          <img onClick={handleBackArrowButton} className="w-[18px]  " src="arrow.png" alt="arrow png" />
        </button>
        <span>
          <b className="text-customGreen">{quizCounter}</b>
          <b>/33</b>
        </span>
      </div>
        
    </>
  );
};

export default Progressbar;
