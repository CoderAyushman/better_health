"use client";
import React, { useEffect, useState } from "react";
import Progressbar from "../components/Progressbar";
import quizes from "../components/QuizesFemale";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { add } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "../components/RadioValues";

const Page = () => {
  const { radioValues, setRadioValues } = useRadioValues();
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
    quizes[quizCounter] == quizes[11] ||
    quizes[quizCounter] == quizes[15] ||
    quizes[quizCounter] == quizes[21] ||
    quizes[quizCounter] == quizes[22] ||
    quizes[quizCounter] == quizes[23] ||
    quizes[quizCounter] == quizes[24] ||
    quizes[quizCounter] == quizes[25]
  ) {
    quizCompaireCounter = false;
  }
  return (
    <div>
      {quizCompaireCounter ? <Progressbar /> : <></>}
      {quizes[quizCounter]}
    </div>
  );
};

export default Page;
