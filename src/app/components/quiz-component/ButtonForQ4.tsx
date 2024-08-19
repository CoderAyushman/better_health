import React from "react";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
interface MyComponentProps {
  num: boolean;
}

const ButtunForQ4: React.FC<MyComponentProps> = ({ num }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(increse());
    dispatch(increseDisplayCounter());
  };
  return (
    <div className=" flex-col justify-between text-center bg-white pt-[10px] fixed w-full  bottom-0  ">
      {num ? (
        <button
          onClick={handleClick}
          className="cursor-pointer bg-customGreen pl-[130px] pr-[130px] pt-[15px] pb-[15px] rounded-full text-white  mb-5"
        >
          <h1>
            <b>NEXT STEP</b>
          </h1>
        </button>
      ) : (
        <button className="cursor-not-allowed  bg-gray-200 pl-[130px] pr-[130px] pt-[15px] pb-[15px] rounded-full text-gray-500  ">
          <h1>
            <b>NEXT STEP</b>
          </h1>
        </button>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default ButtunForQ4;
