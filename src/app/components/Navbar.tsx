"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppSelector } from "@/lib/hooks";

import Share from "./Share";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Cross2Icon } from "@radix-ui/react-icons";
const Navbar = () => {
  const quizCounter = useAppSelector((state) => state.counter.items);
  const [isSheetOpen, setisSheetOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      {quizCounter == 38 ? (
        <></>
      ) : (
        <div className="flex justify-between items-center  fixed top-0 w-full pl-7 pr-7 h-20 z-20 bg-transparent ">
          <Image
            alt="image nav"
            width={500}
            height={500}
            className="w-[150px] md:w-[200px] cursor-pointer"
            src="/better-health.png"
            onClick={() => {
              router.push("/");
            }}
          />
          <Sheet open={isSheetOpen}>
            <SheetTrigger>
              <Image
                width={500}
                height={500}
                className="w-[25px]"
                src="/menu-png.png"
                alt="menu img"
                onClick={() => setisSheetOpen(true)}
              />
            </SheetTrigger>
            <SheetContent className="m-0 p-0 h-full w-full bg-transparent backdrop-blur-md text-white">
              <h1
                onClick={() => {
                  setisSheetOpen(false);
                }}
                className="absolute right-5 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800"
              >
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </h1>
              <div className="flex-col  space-y-20 lg:space-y-10 mt-32 h-full w-full items-center">
                <div className="text-center text-2xl cursor-pointer px-full block">
                  <h1
                    className="text-center text-2xl cursor-pointer motion-preset-slide-left-lg"
                    onClick={() => {
                      router.push("/");
                      setisSheetOpen(false);
                    }}
                  >
                    HOME
                  </h1>
                </div>

                <div className="text-center text-2xl cursor-pointer px-full block">
                  <h1
                    className="text-center text-2xl cursor-pointer motion-preset-slide-left-lg"
                    onClick={() => {
                      router.push("/about");
                      setisSheetOpen(false);
                    }}
                  >
                    ABOUT ME
                  </h1>
                </div>
                <div className="text-center text-2xl cursor-pointer px-full block">
                  <Share />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default Navbar;
