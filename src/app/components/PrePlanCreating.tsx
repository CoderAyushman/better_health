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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { radioValues } from "./RadioValues";
// import { plugin } from "postcss";
// import { getAnswer } from "@/utils/getAnswer";

const PrePlanCreating = () => {
  // const getAnswer = async (msg: any) => {
  //   axios
  //     .post("http://localhost:8000/api/langchain/gemini", {
  //       prompt: msg,
  //     })
  //     .then(async (response) => {
  //       console.log(response.data.response);
  //       radioValues[35].response = await response.data.response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // message template
  const message = `I'm want to ${radioValues[1]} , my physical build is  ${radioValues[2]} 
  , my body goal is  ${radioValues[3]} , my target zones are (Arms:  ${radioValues[4].one} 
  , Pecs: ${radioValues[4].two} ,Belly: ${radioValues[4].three} , Legs: ${radioValues[4].four} 
  , Back : ${radioValues[4].five}) ,  ${radioValues[5]} ,  Im ${radioValues[6]} in my best shape 
  , ${radioValues[7]} , ${radioValues[8]} , I sleep ${radioValues[9]} , ${radioValues[10]} 
  , ${radioValues[12]} , ${radioValues[13]} , ${radioValues[14]}, I love to do ${radioValues[17]} exercise 
  , ${radioValues[19]} , I prefer ${radioValues[22]} diet , I am ${radioValues[28].ft} feet or ${radioValues[28].cm} cm 
  , My current weight is ${radioValues[29].kg} kg or ${radioValues[29].lbs} lbs 
  , My goal weight is ${radioValues[30].kg} kg or ${radioValues[30].lbs} lbs 
  , I am ${radioValues[31].year} year old. Give me a proper diet 
  , workout ,diffrent diet suited healthy dishes list and also intermittent fasting if needed ,give a detailed plan.
   Give all things with a markdown table format`;

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
    radioValues[34].message = message;
    // getAnswer(message);
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
                        <img
                          src="white-star-img.jpg"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                        <img
                          src="white-star-img.jpg"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                        <img
                          src="white-star-img.jpg"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                        <img
                          src="white-star-img.jpg"
                          alt="white-star-img"
                          className="w-[20px]"
                        />
                        <img
                          src="white-star-img.jpg"
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
          <CarouselPrevious />
          <CarouselNext />
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
