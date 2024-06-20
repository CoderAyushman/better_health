import React from 'react'
interface MyComponentProps {
  num: number;
}


const ButtunForQ4: React.FC<MyComponentProps> = ({num}) => {
  const handleClick=()=>{
    console.log(num)
  }
  return (
    <div className='text-center bg-white pb-[20px] pt-[20px] fixed w-full  bottom-0 '>
      <button  onClick={handleClick}className='cursor-not-allowed  bg-customGreen pl-[130px] pr-[130px] pt-[15px] pb-[15px] rounded-full text-white  '><h1><b>NEXT STEP</b></h1></button>
    </div>
  )
}

export default ButtunForQ4;