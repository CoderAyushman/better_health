"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { radioValues } from "../components/RadioValues";
const Output = () => {
  const [markdownText, setMarkdownText] = useState(radioValues[35].response);

  return (
    <div className="flex items-center justify-center mt-32 text-xl">
      <div className="flex-col items-center justify-center">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Output;
// I'm want to loseweight , my physical build is  medium build , my body goal is  slender , my target zones are (Arms:  true , Pecs: false ,Belly: false , Legs: false , Back : false) ,  I gain weight easily but find it hard to lose ,  Im 1-3year in my best shape , My work schedule is 9am to 5pm , I spend most of the day sitting , I sleep less than 5 hours , I drink fewer than 2 glasses of water , I do workout several times per week , I go for walk 3-4 times per week , I'm so out of breath I can't talk, I love to do Burpees exercise , I prefer home for workout , I prefer KetoVegan diet , I am 5 feet or 152 cm , My current weight is 74 kg or 163 lbs , My goal weight is 52 kg or 115 lbs , I am 21 year old. Give me a proper diet , workout and diffrent diet suited healthy dishes list.
