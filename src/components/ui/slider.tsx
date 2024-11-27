"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { radioValues } from "@/app/components/RadioValues";
import { CldImage } from "next-cloudinary";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative  h-3 w-full grow overflow-hidden rounded-full bg-custom-gradient">
      <SliderPrimitive.Range className="absolute h-full " />
    </SliderPrimitive.Track>

    {/* <SliderPrimitive.Thumb className="block h-6 w-6   rounded-full border-2 border-slate-900 border-slate-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:border-slate-50/50 dark:bg-slate-950 dark:focus-visible:ring-slate-300" /> */}
    <SliderPrimitive.Thumb>
      <div className=" flex-col justify-center items-center mb-16 ">
        <h1 className=" text-center bg-gray-600 font-bold text-white rounded-full w-[100px] p-2">
          You - {radioValues[29].bmi}
        </h1>
        <div className="flex justify-center items-center ">
          <CldImage
            width={500}
            height={500}
            className="w-5 text-center "
            src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/qg3yoh1xkckiaxstk6ef"
            alt="arrow-down.svg"
          />
        </div>
        <div className="flex justify-center items-center ">
          <span className="block h-6 w-6 rounded-full border-[5px] border-gray-300 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:border-slate-50/50 dark:bg-slate-950 dark:focus-visible:ring-slate-300"></span>
        </div>
      </div>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
