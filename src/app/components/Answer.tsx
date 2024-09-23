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
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  TumblrShareButton,
  TumblrIcon,
  LivejournalShareButton,
  LivejournalIcon,
  ViberShareButton,
  ViberIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
  InstapaperShareButton,
  InstapaperIcon,
  HatenaShareButton,
  HatenaIcon,
} from "react-share";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Output = () => {
  const [regenerate, setRegenerate] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);
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
  const url = "https://better-health-chi.vercel.app/";
  const title =
    "🌟 Ready to take control of your health? Discover Better Health – your personal guide to a healthier, happier you! 🧘‍♀️💪 From tailored fitness plans to personalized wellness tips, we've got you covered. Start your journey today and unlock the best version of yourself! 🚀 Better-Health-";

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
            <div className="flex-col mb-5 mr-2">
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
            <div className="flex-col mb-5  mr-6">
              <ResetAllDataBtn />
              <h6 className="text-xs text-gray-500 font-bold text-center">
                Reset
              </h6>
            </div>
            <div className="flex-col mb-5 ">
              <AlertDialog>
                <AlertDialogTrigger>
                  <div className="w-[50px]  bg-customGreen rounded-md overflow-visible  text-white py-2    px-2">
                    <img src="share.png" alt="share-img" />
                  </div>
                  <h6 className="text-xs text-gray-500 font-bold text-center">
                    Share
                  </h6>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Share and help others.</AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="flex flex-wrap gap-5 justify-start items-center">
                        <FacebookShareButton url={url} title={title}>
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={url} title={title}>
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <LinkedinShareButton url={url} title={title}>
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton url={url} title={title}>
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <TelegramShareButton url={url} title={title}>
                          <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        <RedditShareButton url={url} title={title}>
                          <RedditIcon size={32} round />
                        </RedditShareButton>
                        <EmailShareButton url={url} subject={title}>
                          <EmailIcon size={32} round />
                        </EmailShareButton>
                        <VKShareButton url={url} title={title}>
                          <VKIcon size={32} round />
                        </VKShareButton>
                        <OKShareButton url={url} title={title}>
                          <OKIcon size={32} round />
                        </OKShareButton>
                        <TumblrShareButton url={url} title={title}>
                          <TumblrIcon size={32} round />
                        </TumblrShareButton>
                        <LivejournalShareButton url={url} title={title}>
                          <LivejournalIcon size={32} round />
                        </LivejournalShareButton>
                        <ViberShareButton url={url} title={title}>
                          <ViberIcon size={32} round />
                        </ViberShareButton>
                        <LineShareButton url={url} title={title}>
                          <LineIcon size={32} round />
                        </LineShareButton>
                        <PocketShareButton url={url}>
                          <PocketIcon size={32} round />
                        </PocketShareButton>
                        <InstapaperShareButton url={url} title={title}>
                          <InstapaperIcon size={32} round />
                        </InstapaperShareButton>
                        <HatenaShareButton url={url} title={title}>
                          <HatenaIcon size={32} round />
                        </HatenaShareButton>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Cancel</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Output;
