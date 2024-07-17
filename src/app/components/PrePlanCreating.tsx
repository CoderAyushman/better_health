import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PrePlanCreating = () => {
  const percentage = 10;
  return (
    <div>
      <h1>PrePlanCreating</h1>
      <div className="min-h-[222px] max-w-[222px]">
      <CircularProgressbar value={percentage} text={`${percentage}%`} maxValue={100} className="font-bold "
       styles={buildStyles({
        // Colors
        pathColor: '#2FDEB3',
        textColor: '#000000',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
        textSize:'32px',
        
      })} />
      </div>
    </div>
  );
};

export default PrePlanCreating;
