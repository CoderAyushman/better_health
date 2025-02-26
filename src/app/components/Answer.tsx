"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRadioValues } from "../components/RadioValues";
import "@/app/components/tableSheet.css";
import ResetAllDataBtn from "./ResetAllDataBtn";
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
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CldImage } from "next-cloudinary";
import {jsPDF} from "jspdf";

const Output = () => {
  const { radioValues} = useRadioValues();
  const [regenerate, setRegenerate] = useState<boolean>(false);
  const { toast } = useToast();

  const getTargetElement = useRef<any>();
  const getImageRef = useRef<any>();
  const markdownRef = useRef<any>();
  const [markdownText, setMarkdownText] = useState<any>(null);
  const MODEL_NAME = "gemini-2.0-flash-exp";
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
      const result = await model.generateContent(radioValues[20].message);
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

  const downloadPdf = () => { 
    const doc = new jsPDF("portrait", "pt", "a4");
    const content=markdownRef.current; 
    doc.setTextColor('#D2B37C');
    doc.setFontSize(15);
    doc.setFont("arial", "bold");
    doc.text(new Date().toUTCString(), 10, 62);
    doc.addImage(getImageRef.current, "JPEG", 450,0,120,120);
    doc.html(content,{
            callback: function (doc) {
                doc.save('sample.pdf');
            },width:600 ,windowWidth:800,x:10,y:100}) 
    // doc.save("better-health-diet-plan.pdf");     
  }
  return (
    <main className="flex items-center justify-center mt-32 ">
      <div className="flex-col items-center justify-center ml-10 mr-10">
        <CldImage
          width={500}
          height={500}
          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/jvwytpeowbr6r9b5m44b"
          alt="healthy food"
          className="h-[600px] ml-[50vw]  fixed z-0 opacity-30 md:w-[700px] md:ml-[40vw]"
        />
        <div className="z-10 relative">
          <div ref={getTargetElement} id="htmlContent">
           <div ref={markdownRef} >
             <h1 className="text-xl md:text-2xl mb-3 font-semibold ">Here yours ai generated full personal Diet -</h1>

             {markdownText === null ? (
               <Skeleton count={50} height={50} />
             ) : (
               <ReactMarkdown remarkPlugins={[remarkGfm]} >
                 {markdownText}
               </ReactMarkdown>
             )}
           </div>
            <div className="flex justify-between items-center">
              <h1 className="text-md md:text-xl  font-sans text-[#D2B37C] font-bold">
                {new Date().toUTCString()}
              </h1>
              <CldImage
                ref={getImageRef}
                width={500}
                height={500}
                src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/z36rlknkgaw8xwuy0n7q"
                alt="better-heath-seal"
                className="w-[120px] md:w-[200px]"
              />
            </div>
          </div>
          <div id="editor"></div>
          <div className="flex items-center justify-start ">
            <div className="flex-col mb-5 mr-4">
              <button
                onClick={() => {
                  toast({
                    description: "Downloading...",
                  });
                  downloadPdf();
                }}
                className="w-[50px]  bg-customGreen rounded-md overflow-visible  text-white py-2    px-2"
              >
                <CldImage
                  height={500}
                  width={500}
                  src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/kqd1jkwjddvp3y4sylci"
                  alt="download"
                />
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
                <CldImage
                  height={500}
                  width={500}
                  src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/uf85p57oprnlhel83nss"
                  alt="refresh"
                />
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
                    <CldImage
                      height={500}
                      width={500}
                      src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/so0sjubtu90jpfu3x0fs"
                      alt="share-img"
                    />

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
