import { decrease, increse } from "@/lib/features/counter/counterSlice";
import { decreaseDisplayCounter, increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";

const AboutSurroundings = () => {
  const displayCounter=useAppSelector(state=>state.diplayCounter.items)
  const dispatch = useAppDispatch();
  const handleBackArrowButton = () => {
   
    if(displayCounter>21){

      dispatch(decreaseDisplayCounter())
    }
     dispatch(decrease());
     
    };
    const handleOnclickButton = () => {
      
      
      dispatch(increse());
      if(displayCounter!=22){

        dispatch(increseDisplayCounter())
      }
    
    
   
  };
  return (
    <div className="flex  mt-32 justify-center items-center ">
      <div className="mt-3  flex-col justify-center items-center gap-[410px] max-[450px]:gap-[320px]">
        <button>
          <img
            onClick={handleBackArrowButton}
            className="w-[18px]"
            src="arrow.png"
            alt="arrow png"
          />
        </button>
        <h1 className="text-2xl font-bold mt-7 mb-5 text-center">
          Let’s consider your surroundings
        </h1>
        <img
          className="max-w-[440px]"
          src="surrounding-img.webp"
          alt="surrounding-img"
          mb-5
        />
        <div className="flex justify-center items-center  max-w-[410px] p-3 bg-gray-100 rounded-lg  mt-5">
          <p className="text-gray-600 text-sm">
            The way we eat is as important as what we eat. Breaking the cycle of
            unhealthy eating habits can{" "}
            <span className="text-customGreen">help us lose weight</span>{" "}
            without having to make any big dietary changes.
          </p>
        </div>
        <div className="flex justify-center items-center mt-5 max-w-[410px] mb-5">
          <button
            className="max-w-[325px] bg-customGreen pt-3 pb-3 pl-[110px] pr-[110px] rounded-full text-white font-bold"
            onClick={handleOnclickButton}
          >
            OK, GOT IT!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSurroundings;
