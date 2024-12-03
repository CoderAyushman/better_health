'use client'

import React, { createContext, useContext, useState } from 'react';

const initialRadioValues = [
  "0",
  "1",
  "2",
  "3",
  { one: false, two: false, three: false, four: false, five: false },
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  {
    ft: null,//14
    cm: null,
  },
  {
    kg: null,//15
    lbs: null,
    bmi: null,
  },
  {
    kg: null,
    lbs: null,//16
  },
  {
    year: null,//17
    isRequireYear: false,
  },
  " ",//country//18
  " ",//email
  {
    message: null,
  },
  {
    response: null,
  },
];

type RadioValuesContextType = {
  radioValues: any[];
  setRadioValues: React.Dispatch<React.SetStateAction<any[]>>;
};

const RadioValuesContext = createContext<RadioValuesContextType | undefined>(undefined);

export const RadioValuesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [radioValues, setRadioValues] = useState(initialRadioValues);

  return (
    <RadioValuesContext.Provider value={{ radioValues, setRadioValues }}>
      {children}
    </RadioValuesContext.Provider>
  );
};

export const useRadioValues = () => {
  const context = useContext(RadioValuesContext);
  if (context === undefined) {
    throw new Error('useRadioValues must be used within a RadioValuesProvider');
  }
  return context;
};

