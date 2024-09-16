"use client";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { radioValues } from "../components/RadioValues";
import "@/app/components/tableSheet.css";
import ResetAllDataBtn from "./ResetAllDataBtn";

const Output = () => {
  const [markdownText, setMarkdownText] = useState<any>(
    radioValues[35].response
  );
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

  // console.log(API_KEY, MODEL_NAME)
  //query from gemini
  useEffect(() => {
    const runChat = async () => {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const result = await model.generateContent(radioValues[34].message);
      const response = result.response.text();
      // console.log(typeof radioValues[34].message);
      // console.log(response);
      setMarkdownText(response);
      radioValues[35].response = response;
    };
    if (markdownText === null) {
      runChat();
    } else {
      setMarkdownText(radioValues[35].response);
    }
  }, []);
  return (
    <main className="flex items-center justify-center mt-32 ">
      <div className="flex-col items-center justify-center ml-10 mr-10">
        <img
          src="healthy-food-img.webp"
          alt="healthy food"
          className="h-[600px] ml-[50vw]  fixed z-0 opacity-30 md:w-[700px] md:ml-[40vw]  "
        />
        <div className="z-10 relative">
          <h1>Here yours ai generated full personal Diet.</h1>

          {markdownText === null ? (
            <Skeleton count={50} height={50} />
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownText}
            </ReactMarkdown>
          )}

          <ResetAllDataBtn />
        </div>
      </div>
    </main>
  );
};

export default Output;
