"use client";
import React from "react";
import Progressbar from "../components/Progressbar";
import quizes from "../components/Quizes";
import { useAppSelector } from "@/lib/hooks";
import Intromale from "../intromale/page";

const page = () => {
  const quizCounter = useAppSelector((state) => state.counter.items);
  return (
    <div>
      {quizCounter >= 1 ? <Progressbar /> : <></>}
      {quizes[quizCounter]}
    </div>
  );
};

export default page;
