"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrease } from "@/lib/features/counter/counterSlice";
import { radioValues, setRadioValues } from "./RadioValues";
import {
  addDisplayCounter,
  decreaseDisplayCounter,
} from "@/lib/features/counter/displayCounterSlice";
import quizes from "./Quizes";
import { elements } from "chart.js";
import { update } from "@/lib/features/dataSlice";
import { CldImage } from "next-cloudinary";
// var dubQuizCounter=quizCounter;

const Progressbar = () => {
  const [displayCounter, setDisplayCounter] = useState<number>(1);
  const quizCounter: any = useAppSelector((state) => state.diplayCounter.items);
  const pageCounter: number = useAppSelector((state) => state.counter.items);
  // const [displayQuizCounter, setDisplayQuizCounter] =
  //   useState<any>(quizCounter);
  const dispatch = useAppDispatch();
  const handleBackArrowButton = () => {
    dispatch(decrease());

    dispatch(decreaseDisplayCounter());
  };
  useEffect(() => {
    if (quizCounter != 1) {
      console.log("quizCounter", quizCounter);
      localStorage.setItem("displayCounter", JSON.stringify(quizCounter));
      setDisplayCounter(quizCounter);
    } else {
      setDisplayCounter(quizCounter);
      // localStorage.setItem('data',JSON.stringify(radioValues))
    }
  }, [quizCounter]);
  // useEffect(() => {
  //   // if (quizCounter == 0) {
  //   //   setDisplayCounter(quizCounter+1);
  //   // }
  //   // else if(quizCounter==1){
  //   //   setDisplayCounter(quizCounter+1);
  //   // }
  //   // else if(quizCounter > 1){
  //   //   setDisplayCounter(quizCounter);
  //   // }
  //   if(quizCounter!=1){

  //     setDisplayCounter(quizCounter);
  //   }
  //   else if(quizCounter == 2){
  //     setDisplayCounter(1)
  //   }
  // }, [quizCounter]);

  useEffect(() => {
    const localStore: any = localStorage.getItem("displayCounter");
    // if(localDataStore && pageCounter!=1){
    // setRadioValues(JSON.parse(localDataStore))
    //   console.log("the radiovalues are upadated")
    // }
    if (localStore && pageCounter != 1) {
      console.log(localStore);

      dispatch(addDisplayCounter(parseInt(JSON.parse(localStore))));
    } else {
      setDisplayCounter(1);
    }
  }, []);

  return (
    <>
      <div className="mt-28 flex justify-center items-center">
        <Progress
          value={displayCounter * 3.125}
          className="max-w-[340px] md:max-w-[450px] h-1 "
        />
      </div>
      <div className="mt-3  flex justify-center items-center gap-[410px] max-[450px]:gap-[270px]">
        <button>
          <CldImage
            width={500}
            height={500}
            onClick={handleBackArrowButton}
            className="w-[18px] "
            src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/k0euitymbhpdglasmx9z"
            alt="arrow png"
          />
        </button>
        <span>
          <b className="text-customGreen">{displayCounter}</b>
          <b>/32</b>
        </span>
      </div>
    </>
  );
};

export default Progressbar;
