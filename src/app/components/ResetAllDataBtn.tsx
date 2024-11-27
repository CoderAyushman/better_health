"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CldImage } from "next-cloudinary";
const ResetAllDataBtn = () => {
  const handleOnclick = () => {
    // localStorage.removeItem('counter');
    // localStorage.removeItem('data');
    localStorage.clear();

    window.location.assign("/");
  };
  return (
    <div className="flex justify-center items-center">
      <Dialog>
        <DialogTrigger>
          <button className="flex w-[50px] md:w-[50px] text-sm  md:text-base bg-customGreen rounded-md overflow-visible  text-white p-2   ">
            <CldImage
              width={500}
              height={500}
              src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/bezdxfpssclbinxivmuk"
              alt="reset"
            />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This will permanently delete your given data and ai generated diet
              plans.
            </DialogDescription>
            <button
              onClick={handleOnclick}
              className=" bg-customGreen rounded-full overflow-visible  text-white py-2 mb-5   px-2 "
            >
              <b>Reset</b>
            </button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>

    // <button
    //     onClick={handleOnclick}

    //     className="bg-customGreen rounded-full overflow-visible  text-white pt-5 mt-[10px] pb-5  pl-28 pr-28 "
    // >
    //     <b>CONTINUE</b>
    // </button>
  );
};

export default ResetAllDataBtn;
