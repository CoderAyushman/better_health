"use client";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { radioValues } from "../components/RadioValues";
import "@/app/components/tableSheet.css";
import ResetAllDataBtn from "./ResetAllDataBtn";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import { useToast } from "@/components/hooks/use-toast";

const Output = () => {
  const [regenerate, setRegenerate] = useState<boolean>(false);
  const { toast } = useToast();
  const options: any = {
    resolution: Resolution.HIGH,
    filename: "better-health-diet-plan.pdf",
    page: {
      margin: Margin.SMALL,
      format: "junior-legal",
    },
    canvas: {
      qualityRatio: 1,
    },
    overrides: {
      pdf: {
        compress: true,
      },
      canvas: {
        useCORS: true,
      },
    },
  };

  const getTargetElement = useRef<any>();
  const [markdownText, setMarkdownText] = useState<any>(null);
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

  //query from gemini
  useEffect(() => {
    const localStoreResponse = localStorage.getItem("ai-response");

    const runChat = async () => {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const result = await model.generateContent(radioValues[34].message);
      const response = result.response.text();
      localStorage.setItem("ai-response", response);

      setMarkdownText(response);
    };
    if (!localStoreResponse || regenerate) {
      runChat();
    } else {
      setMarkdownText(localStoreResponse);
    }
  }, [, regenerate]);

  return (
    <main className="flex items-center justify-center mt-32 ">
      <div className="flex-col items-center justify-center ml-10 mr-10">
        <img
          src="healthy-food-img.webp"
          alt="healthy food"
          className="h-[600px] ml-[50vw]  fixed z-0 opacity-30 md:w-[700px] md:ml-[40vw]"
        />
        <div className="z-10 relative">
          <div ref={getTargetElement} className="">
            <h1>Here yours ai generated full personal Diet.</h1>

            {markdownText === null ? (
              <Skeleton count={50} height={50} />
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownText}
              </ReactMarkdown>
            )}
            <div className="flex justify-between items-center">
              <h1 className="text-md md:text-xl  font-sans text-[#D2B37C] font-bold">
                {new Date().toUTCString()}
              </h1>
              <img
                src="better-health-seal.png"
                alt="better-heath-seal"
                className="w-[120px] md:w-[200px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-start ">
            <div className="flex-col mb-5 mr-4">
              <button
                onClick={() => {
                  toast({
                    description: "Downloading...",
                  });
                  generatePDF(getTargetElement, options);
                }}
                className="w-[50px]  bg-customGreen rounded-md overflow-visible  text-white py-2    px-2"
              >
                <img src="download.png" />
              </button>
              <h6 className="text-xs text-gray-500 font-bold text-center">
                Download
              </h6>
            </div>
            <div className="flex-col mb-5 mr-3">
              <button
                onClick={() => {
                  setRegenerate(true);
                  setMarkdownText(null);
                }}
                className="w-[50px]  bg-customGreen rounded-md overflow-visible  text-white py-2    px-2"
              >
                <img src="refresh-png.png" />
              </button>
              <h6 className="text-xs text-gray-500 font-bold  text-center">
                Regenerate
              </h6>
            </div>
            <div className="flex-col mb-5  ">
              <ResetAllDataBtn />
              <h6 className="text-xs text-gray-500 font-bold text-center">
                Reset
              </h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Output;
