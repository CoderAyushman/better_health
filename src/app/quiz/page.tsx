"use client";
import React, { useEffect, useState } from "react";
import Progressbar from "../components/Progressbar";
import quizes from "../components/Quizes";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { add } from "@/lib/features/counter/counterSlice";
// import Intromale from "../intromale/page";
// import AboutSurroundings from "../components/quiz-component/AboutSurroundings";
// import { json } from "stream/consumers";

const page = () => {
  const dispatch=useAppDispatch();
  let quizCounter: any = useAppSelector((state) => state.counter.items);
  useEffect(()=>{
    if(quizCounter!=0){
      localStorage.setItem('counter',JSON.stringify(quizCounter))
    }
    else{
      setTimeout(()=>{
        
      },500)
    }
  },[quizCounter])
  useEffect(()=>{
    const localStore=localStorage.getItem('counter')
    if(localStore){
      dispatch(add(parseInt(JSON.parse(localStore))));
    }
  },[])
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
