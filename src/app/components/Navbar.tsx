"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/lib/hooks";

const Navbar = () => {
  const quizCounter = useAppSelector((state) => state.counter.items);

  return (
    <>
      {quizCounter == 38 ? (
        <></>
      ) : (
        <div className="flex justify-between items-center backdrop-blur-sm fixed top-0 w-full pl-7 pr-7 h-20 z-20">
          <img className="w-[150px] md:w-[200px]" src="better-health.png" />
          <Sheet>
            <SheetTrigger>
              <img className="" src="menu-png.png" alt="menu img" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default Navbar;
