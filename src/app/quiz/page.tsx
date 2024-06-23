"use client";
import React from "react";
import Progressbar from "../components/Progressbar";
import quizes from "../components/Quizes";
import { useAppSelector } from "@/lib/hooks";
import Intromale from "../intromale/page";
import AboutSurroundings from "../components/quiz-component/AboutSurroundings";

const page = () => {
  const quizCounter = useAppSelector((state) => state.counter.items);
  console.log(quizes[quizCounter]!=quizes[22])
  return (
    <div>
      {quizCounter >= 1 && quizes[quizCounter]!=quizes[22] ? <Progressbar /> : <></>}
      {quizes[quizCounter]}
    </div>
  );
};

export default page;
