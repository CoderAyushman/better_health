import React, { useState, useEffect } from "react";
import { useRadioValues } from "./RadioValues";
import { useDispatch } from "react-redux";
import { increse } from "@/lib/features/counter/counterSlice";
import { LockIcon } from "lucide-react";
const TakingEmail = () => {
  const { radioValues, setRadioValues } = useRadioValues();
  const dispatch = useDispatch();
  const [mail, setMail] = useState<string>(radioValues[19]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateEmail(mail));
  }, [mail]);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setRadioValues((prev) => {
      const newRadioValues = [...prev];
      newRadioValues[19] = mail;
      return newRadioValues
    })
    dispatch(increse());
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#6C7988] font-sans">
      <div className="flex-col justify-center items-center w-[410px] border-[1px] text-center bg-white rounded-xl">
        <div className="font-bold text-2xl mt-10">
          <span>
            {" "}
            Enter your email to get your
          </span>{" "}
          <span className="text-customGreen">
            Personalized Weight Loss Plan
          </span>
        </div>
        <form>
          <div className="mt-3 ">
            <input
              type="email"
              name="email"
              id=""
              defaultValue={radioValues[19]}
              placeholder="Enter your email to get your plan"
              className="w-[300px] text-base border-[1px] border-black p-2 rounded-lg"
              required
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center  mt-5 opacity-60 mb-5">
            <div className="flex justify-center items-center max-w-[300px] text-start gap-3 ">
              <h1 className="w-[20px]  ">
                <LockIcon className="text-gray-600" />
              </h1>
              <p className="text-xs font-sans text-gray-600">
                We respect your privacy and are committed to protecting your
                personal data. We&apos;ll email you a copy of your results for
                convenient access.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5  mb-10 text-center">
            {isValid ? (
              <button
                className=" bg-customGreen pt-3 pb-3 pl-[110px] pr-[110px] rounded-full text-white font-bold"
                type="submit"
                onClick={(e) => handleOnSubmit(e)}
              >
                CONTINUE
              </button>
            ) : (
              <button className=" bg-gray-400 pt-3 pb-3 pl-[110px] pr-[110px] rounded-full text-gray-500 font-bold cursor-not-allowed">
                CONTINUE
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TakingEmail;
