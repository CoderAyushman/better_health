import { useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

let radioValues: any = [
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
  "14",
  "15",
  "16",
  "17",
  { one: false, two: false, three: false },
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
  },
  {
    ft: null,
    cm: null,
  },
  {
    kg: null,
    lbs: null,
    bmi: null,
  },
  {
    kg: null,
    lbs: null,
  },
  {
    year: null,
    isRequireYear: false,
  },
  "32",
  "33",
];

export default radioValues;

export function setRadioValues(newValues:any) {
  radioValues = newValues;
  console.log("radio values are set",newValues)
}
