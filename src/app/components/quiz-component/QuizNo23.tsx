import React from "react";

const QuizNo23 = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-col">
        <h1 className="text-3xl font-bold tracking-wide mt-7">
          I don’t usually leave my
          <br /> meal unfinished, even if I’m
          <br /> full.
        </h1>
        <p className="text-black-300 mt-2">
          {" "}
          How much can you relate to this statement?
        </p>
        <div className="flex mt-5">
          <div className="flex-col cursor-pointer">
          <div className="max-w-[150px]  mr-7 bg-gray-100 rounded-md">
            <h1 className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]">
              1
            </h1>
          </div>
          <span className="text-sm text-center">Not at all</span>
          </div>
          <div>

          <div className="max-w-[150px]  mr-7 bg-gray-100 rounded-md cursor-pointer">
            <h1 className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]">
              2
            </h1>
          </div>
          </div>
          <div>
          <div className="max-w-[150px]  mr-7 bg-gray-100 rounded-md cursor-pointer">
            <h1 className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]">
              3
            </h1>
          </div>

          </div>
          <div>
          <div className="max-w-[150px]  mr-7 bg-gray-100 rounded-md cursor-pointer">
            <h1 className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]">
              4
            </h1>
          </div>

          </div>
          <div className="flex-col cursor-pointer">

          <div className="max-w-[150px]  mr-7 bg-gray-100 rounded-md">
            <h1 className="text-2xl font-bold  pr-[25px] pl-[25px] pt-[15px] pb-[15px]">
              5
            </h1>
          </div>
          <span className="text-sm text-center ml-1">Strongly</span>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizNo23;
