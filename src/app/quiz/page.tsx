"use client";
import React, { useEffect, useState } from "react";
import Progressbar from "../components/Progressbar";
import quizes from "../components/Quizes";
import { useAppSelector } from "@/lib/hooks";
import Intromale from "../intromale/page";
import AboutSurroundings from "../components/quiz-component/AboutSurroundings";

const page = () => {
  const quizCounter = useAppSelector((state) => state.counter.items);
  // const [quizCompaireCounter,setQuizCompaireCounter]=useState<boolean>(true);
  useEffect(()=>{})
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
    quizes[quizCounter] == quizes[38] 
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

export default page;
