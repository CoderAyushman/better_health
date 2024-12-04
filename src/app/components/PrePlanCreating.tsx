"use client";
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "./RadioValues";
import { CldImage } from "next-cloudinary";
// import { plugin } from "postcss";
// import { getAnswer } from "@/utils/getAnswer";

const PrePlanCreating = () => {
  const { radioValues } = useRadioValues();
  // message template
  // const message = `I'm want to ${radioValues[1]} , my physical build is  ${radioValues[2]} 
  // , my body goal is  ${radioValues[3]} , my target zones are (Arms:  ${radioValues[4].one} 
  // , Pecs: ${radioValues[4].two} ,Belly: ${radioValues[4].three} , Legs: ${radioValues[4].four} 
  // , Back : ${radioValues[4].five}) ,  ${radioValues[5]} , ${radioValues[7]} , ${radioValues[8]} , I sleep ${radioValues[9]} , ${radioValues[10]} 
  // , ${radioValues[12]} , ${radioValues[13]} , ${radioValues[14]}, I love to do ${radioValues[17]} exercise 
  // , ${radioValues[19]} , I prefer ${radioValues[22]} diet , I am ${radioValues[28].ft} feet or ${radioValues[28].cm} cm 
  // , My current weight is ${radioValues[29].kg} kg or ${radioValues[29].lbs} lbs 
  // , My goal weight is ${radioValues[30].kg} kg or ${radioValues[30].lbs} lbs 
  // , I am ${radioValues[31].year} year old. Give me a proper diet 
  // , workout ,diffrent diet suited healthy dishes list and also intermittent fasting if needed ,give a detailed plan.
  //  Give all things with a markdown table format`;
  const message = `Create a comprehensive diet and workout plan tailored to my needs. I want to ${radioValues[1]}, and my physical build is ${radioValues[2]} with a body goal of ${radioValues[3]}. My target zones are: Arms (${radioValues[4].one}), Pecs (${radioValues[4].two}), Belly (${radioValues[4].three}), Legs (${radioValues[4].four}), and Back (${radioValues[4].five}). My activity level is ${radioValues[5]}, and my dietary habits include ${radioValues[6]}. I sleep ${radioValues[11]} hours a day and usually drink ${radioValues[12]}. In terms of fitness stats, I can do ${radioValues[7] !== "I don’t know" ? radioValues[7] : "0"} squats and ${radioValues[8] !== "I don’t know" ? radioValues[8] : "0"} push-ups. I love to do ${radioValues[9]} exercises and prefer a ${radioValues[13]} diet. My height is ${radioValues[14].ft} feet or ${radioValues[14].cm} cm, and my current weight is ${radioValues[15].kg} kg or ${radioValues[15].lbs} lbs, with a goal weight of ${radioValues[16].kg} kg or ${radioValues[16].lbs} lbs. I am ${radioValues[17].year} years old. Please provide a proper diet and workout plan, including a list of healthy ${radioValues[18]}'s dishes, different diet options, and intermittent fasting guidance if needed. Format all the details using markdown tables for clarity.`
  const dispatch = useAppDispatch();
  const users = [
    {
      name: "Aaron Klein",
      word: "Such an awesome app",
      description:
        "Such an awesome app! been using it for a few months now and I am really happy with the results as the app is incredibly versatile especially if you prefer to work out at home ...",
    },
    {
      name: "Pete Kovacs",
      word: "Lost over 20 pounds",
      description:
        "The best health and nutrition app I’ve used! Excellent short workouts and stretching. Lost over 20 pounds and helps me get in the right mindset for work.",
    },
    {
      name: "Thomas",
      word: "Amazing fitness app!",
      description:
        "Instant feedback if you encounter a problem…there is absolutely everything in this app for the novice (never exercised before) to the most experienced fitness athlete.",
    },
  ];
  const plugin = React.useRef(
    Autoplay({ active: true })
    // useEmblaCarousel({ loop: true })
  );
  const percentage = 0;
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    if (counter != 100) {
      const updater = () => {
        setCounter(counter + 1);
      };
      const timeObj = setInterval(updater, 50);

      return () => {
        clearInterval(timeObj);
      };
    } else {
      setTimeout(() => {
        dispatch(increse());
      }, 400);
    }
  }, [counter]);

  useEffect(() => {
    radioValues[20].message = message;
  }, []);
  return (
    <div className="flex-col justify-center items-center mt-32">
      <div className="flex text-center justify-center items-center w-full">
        <div className="max-w-[200px] ">
          <CircularProgressbar
            value={counter}
            text={`${counter}%`}
            maxValue={100}
            className="font-bold"
            styles={buildStyles({
              // Colors
              pathColor: "#2FDEB3",
              textColor: "#000000",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
              textSize: "30px",
            })}
          />
          <p className="mt-5 font-semibold">
            {counter >= 80
              ? "Your personalized Weight loss plan is ready!"
              : "Creating your personalized Weight loss  plan"}
          </p>
          <hr />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <h1 className="font-bold text-customGreen text-3xl">
          150 million people
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold"> have chosen BetterMe</h1>
      </div>
      <div className="flex justify-center items-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex-col  max-w-[300px] min-h-[200px] items-center justify-center ">
                      <div className="flex gap-1 justify-start items-center mt-5">
                        <CldImage
                          width={500}
                          height={500}
                          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/abg1ninhal11sf2pgyv9"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                        <CldImage
                          width={500}
                          height={500}
                          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/abg1ninhal11sf2pgyv9"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                        <CldImage
                          width={500}
                          height={500}
                          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/abg1ninhal11sf2pgyv9"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                        <CldImage
                          width={500}
                          height={500}
                          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/abg1ninhal11sf2pgyv9"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                        <CldImage
                          width={500}
                          height={500}
                          src="https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/abg1ninhal11sf2pgyv9"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                      </div>
                      <div className="flex  justify-between items-center mt-5">
                        <h1 className="font-bold text-sm">
                          {users[index].word}
                        </h1>
                        <span className="text-sm font-light">
                          {users[index].name}
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-medium">
                          {users[index].description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default PrePlanCreating;

/*

Such an awesome app
Aaron Klein
Such an awesome app! been using it for a few months now and I am really happy with the results as the app is incredibly versatile especially if you prefer to work out at home ...
Lost over 20 pounds
Pete Kovacs
The best health and nutrition app I’ve used! Excellent short workouts and stretching. Lost over 20 pounds and helps me get in the right mindset for work.
Amazing fitness app!
Thomas
Instant feedback if you encounter a problem…there is absolutely everything in this app for the novice (never exercised before) to the most experienced fitness athlete.



*/
