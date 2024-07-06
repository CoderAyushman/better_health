import React from 'react'
import { Slider } from "@/components/ui/slider"
import radioValues from '../RadioValues'

const QuizNo32 = () => {
  // const bmi=radioValues[29].bmi;
  const bmi=20;
  return (
    <div className='flex justify-center items-center mt-32 w-full'>
      <div className='flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-center'>Here’s your wellness profile</h1>
        <div className='flex-col max-w-[600px] border border-gray-200 mt-5 rounded-md p-5 shadow-lg'>
         <div className="flex justify-between gap-5">
          <h1 className='text-2xl font-bold'>Body Mass Index (BMI)</h1>
          <p className='p-1 border border-gray-400 rounded-md  text-gray-400 font-bold mb-4'>NORMAL - 21.5</p>

         </div>
          <div className="flex-col justify-center items-center max-w-[80px] " style={{marginLeft:`${5*bmi}px`}}>
         <h1 className="text-center bg-gray-600 font-bold text-white rounded-full" >You - {bmi}</h1>
         <div className='flex justify-center items-center'>

          <img  className="w-5 text-center" src="arrow-down.svg" alt="arrow-down.svg" />
         </div>
          </div>
        <div className='mt-7'>
        <Slider value={[bmi]} max={50} step={1} />
        <div className='flex justify-between text-gray-400 text-sm font-bold mt-3'>
         <span>UNDERWEIGHT</span>
         <span>NORMAL</span>
         <span>OVERWEIGHT</span>
         <span>OBESE</span>
        </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default QuizNo32