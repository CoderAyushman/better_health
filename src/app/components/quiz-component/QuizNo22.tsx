
"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "../Footer";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import radioValues from "../RadioValues";

const QuizNo22 = () => {
  const dispatch=useAppDispatch();

  const handleClickOnTraditionalFood=()=>{
    radioValues[22]="TraditionalFood";
  dispatch(increse());
  }
  const handleClickOnKeto=()=>{
    radioValues[22]="keto food";

    dispatch(increse());
  }
  const handleClickOnVegeterian=()=>{
    radioValues[22]="vegetarian";

    dispatch(increse());
  }
  const handleClickOnVegan=()=>{
    radioValues[22]="vegan plantdiet";

    dispatch(increse());
  }
  const handleClickOnKetoVegan=()=>{
    radioValues[22]="KetoVegan";

    dispatch(increse());
  }
  const handleClickOnPescatarian=()=>{
    radioValues[22]="Pescatarian";

    dispatch(increse());
  }
  const handleClickOnLactoseFree=()=>{
    radioValues[22]="Lactose Free";

    dispatch(increse());
  }
  const handleClickOnGlutenFree=()=>{
    radioValues[22]="Gluten Free";

    dispatch(increse());
  }
  const handleClickOnPaleo=()=>{
    radioValues[22]="Paleo";

    dispatch(increse());
  }
  const handleClickOnMediterranean=()=>{
    radioValues[22]="Mediterranean";

    dispatch(increse());
  }
  return (
  
  <div className="flex-col justify-center items-center">
    <div className="flex-col justify-center items-center text-center ">
      <h1 className="text-4xl font-bold tracking-wide mt-7">
      What type of diet do you <br /> prefer?
      </h1>
    </div>
    <div className="flex justify-evenly items-center  mt-5">
      <RadioGroup defaultValue={radioValues[22]}>
        <Label
            onClick={handleClickOnTraditionalFood}
            htmlFor="r1"
            className="flex justify-between mt-[15px] shadow-md rounded-xl border border-gray-200 items-center w-[460px]  transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              
              src="imageOfMale/quiz-22nd/traditional-img.png"
              alt="lose-weight-img"
            />
            <div>
            <h1 className="pr-[140px] font-semibold text-base ">Traditional</h1>
            <span className="text-gray-400">I enjoy everything</span>
            </div>
            <RadioGroupItem className="mr-5 " value="TraditionalFood" id="r1" />
          </Label>

          <Label
          onClick={handleClickOnKeto}
            htmlFor="r2"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-22nd/keto-img.png"
              alt="gain-muscle-img"
            />

            <div>
            <h1 className="pr-[140px] font-semibold text-base ">Keto</h1>
            <span className="text-gray-400">I prefer high-fat low-carb meals</span>
            </div>
            <RadioGroupItem className="mr-5" value="keto food" id="r2" />
          </Label>
          <Label
          onClick={handleClickOnVegeterian}
            htmlFor="r3"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
             src="imageOfMale/quiz-22nd/vegeterian-img.png"
              alt="gain-muscle-img"
            />

            <div>
            <h1 className="pr-[140px] font-semibold text-base">Vegetarian</h1>
            <span className="text-gray-400">I prefer high-fat low-carb meals</span>
            </div>
            <RadioGroupItem className="mr-5" value="vegetarian" id="r3" />
          </Label>
          <Label
          onClick={handleClickOnVegan}
            htmlFor="r4"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-22nd/vegan-img.png"
              alt="gain-muscle-img"
            />

            <div>
            <h1 className="pr-[90px] font-semibold text-base">Vegan (Plant Diet)</h1>
            <span className="text-gray-400">
            I do not eat animal products</span>
            </div>
            <RadioGroupItem className="mr-5" value="vegan plantdiet" id="r4" />
          </Label>
          <Label
          onClick={handleClickOnKetoVegan}
            htmlFor="r4"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-22nd/keto-vegan-img.png"
              alt="gain-muscle-img"
            />

            <div  className="mr-[-32px] ">
            <h1 className="pr-[0px] font-semibold text-base">Keto Vegan</h1>
            <span className="text-gray-400">
            I eat low-carb plant-based meals only</span>
            </div>
            <RadioGroupItem className="mr-5" value="KetoVegan" id="r4" />
          </Label>
          <Label
          onClick={handleClickOnPescatarian}
            htmlFor="r4"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-22nd/pescatarian-img.png"
              alt="gain-muscle-img"
            />

            <div>
            <h1 className="pr-[130px] font-semibold text-base">Pescatarian</h1>
            <span className="text-gray-400">
            I avoid meat but enjoy fish</span>
            </div>
            <RadioGroupItem className="mr-5" value="Pescatarian" id="r4" />
          </Label>
          <Label
          onClick={handleClickOnLactoseFree}
            htmlFor="r4"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-22nd/lactose-img.png"
              alt="gain-muscle-img"
            />

            <div  className="mr-[-22px] ">
            <h1 className="pr-[0px] font-semibold text-base">Lactose Free</h1>
            <span className="text-gray-400">
            I do not consume foods with lactose</span>
            </div>
            <RadioGroupItem className="mr-5" value="Lactose Free" id="r4" />
          </Label>
          <Label
          onClick={handleClickOnGlutenFree}
            htmlFor="r4"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-22nd/gluten-img.png"
              alt="gain-muscle-img"
            />

            <div>
            <h1 className="pr-[0px] font-semibold text-base">Gluten Free</h1>
            <span className="text-gray-400">
            I avoid gluten-containing grains</span>
            </div>
            <RadioGroupItem className="mr-5" value="Gluten Free" id="r4" />
          </Label>
          <Label
          onClick={handleClickOnPaleo}
            htmlFor="r4"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-22nd/paleo-img.png"
              alt="gain-muscle-img"
            />

            <div>
            <h1 className="pr-[180px] font-semibold text-base">Paleo</h1>
            <span className="text-gray-400">
            I don't eat processed foods</span>
            </div>
            <RadioGroupItem className="mr-5" value="Paleo" id="r4" />
          </Label>
          <Label
          onClick={handleClickOnMediterranean}
            htmlFor="r4"
            className="flex justify-between mt-[15px] shadow-xl rounded-xl border  border-gray-200 items-center w-[460px] transform duration-500 hover:scale-[96%] cursor-pointer"
          >
            <img
              className="w-[104px]"
              src="imageOfMale/quiz-22nd/mediterranean.png"
              alt="gain-muscle-img"
            />

            <div className="mr-[-42px] ">
            <h1 className="font-semibold text-base">Mediterranean</h1>
            <span className="text-gray-400">
I eat plenty of veggies, grains and seafood
</span>
            </div>
            <RadioGroupItem className="mr-5" value="Mediterranean" id="r4" />
          </Label>
      </RadioGroup> 
    </div>
    <Footer />
  </div>
  
  )
}
export default QuizNo22;