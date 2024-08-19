"use client";
import React, { useEffect, useState } from "react";
import Progressbar from "../components/Progressbar";
import quizes from "../components/Quizes";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { add } from "@/lib/features/counter/counterSlice";
import { radioValues, setRadioValues } from "../components/RadioValues";
import { update } from "@/lib/features/dataSlice";
// import Intromale from "../intromale/page";
// import AboutSurroundings from "../components/quiz-component/AboutSurroundings";
// import { json } from "stream/consumers";

const page = () => {
  const dispatch = useAppDispatch();
  let quizCounter: any = useAppSelector((state) => state.counter.items);
  useEffect(() => {
    if (quizCounter != 0) {
      localStorage.setItem("counter", JSON.stringify(quizCounter));

      // console.log(radioValues)
    }
    if (radioValues[1] != "1") {
      localStorage.setItem("data", JSON.stringify(radioValues));
    }
  }, [quizCounter]);
  useEffect(() => {
    const localStore = localStorage.getItem("counter");
    const localDataStore: any = localStorage.getItem("data");
    if (localDataStore) {
      setRadioValues(JSON.parse(localDataStore));
      console.log(JSON.parse(localDataStore));
    }
    if (localStore) {
      dispatch(add(parseInt(JSON.parse(localStore))));
      // console.log(JSON.parse(localDataStore));
    }
    // console.log(radioValues);
  }, []);
  let quizCompaireCounter = true;
  console.log(quizCounter);
  if (quizCounter == 0) {
    quizCompaireCounter = false;
  } else if (
    quizes[quizCounter] == quizes[22] ||
    quizes[quizCounter] == quizes[29] ||
    quizes[quizCounter] == quizes[34] ||
    quizes[quizCounter] == quizes[36] ||
    quizes[quizCounter] == quizes[37] ||
    quizes[quizCounter] == quizes[38] ||
    quizes[quizCounter] == quizes[39]
  ) {
    quizCompaireCounter = false;
  }
  return (
    <div className="min-h-[100vh] w-[100vw]  flex-col">
      {quizCompaireCounter ? <Progressbar /> : <></>}


      {quizes[quizCounter]}

    </div>
  );
};

export default page;
