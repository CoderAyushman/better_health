import React, { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { increse } from "@/lib/features/counter/counterSlice";
import { useRadioValues } from "../RadioValues";
import { increseDisplayCounter } from "@/lib/features/counter/displayCounterSlice";
import { countries } from "@/utils/countries";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const QuizNo18 = () => {
  const { radioValues, setRadioValues } = useRadioValues()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredCountries, setFilteredCountries] = useState<typeof countries>([])
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func(...args), delay)
    }
  }
  useEffect(() => {
    if (radioValues[18] != " ") {
      setIsClicked(true)
      setSearchQuery(radioValues[18])
    }
  }, [])
  const filterCountries = useCallback(
    debounce((query: string) => {
      if (query.trim() === "") {
        setFilteredCountries([])
      } else {
        const filtered = countries
          .filter((country) =>
            country.country.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5)
        setFilteredCountries(filtered)
      }
    }, 300),
    []
  )

  useEffect(() => {
    filterCountries(searchQuery)
  }, [searchQuery, filterCountries])


  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increse());
    dispatch(increseDisplayCounter());
    setRadioValues((prev) => {
      const newRadioValues = [...prev];
      newRadioValues[18] = searchQuery;
      return newRadioValues;
    });
  };
  return (
    <>
      <div className="flex-col justify-center items-center text-center mb-5">
        <h1 className="text-3xl font-bold tracking-wide mt-7 max-w-[340px] md:max-w-[450px] mx-auto">
          Where are you from?
        </h1>

        <div className="flex  justify-center items-center mt-7 gap-3">
          <div className="flex-col">
            <div className="flex items-center">
              <div className="max-w-[200px] overflow-hidden mt-5  font-bold">
                <Input
                  className="w-[230px] text-center text-3xl"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  defaultValue={radioValues[18]}
                  aria-label="Search for a country"
                />
              </div>
              <h1 className="font-bold text-2xl ">country</h1>
            </div>

            {searchQuery.trim() !== "" && (
              <>
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                  <ul className="space-y-2">
                    {filteredCountries.map((country) => (
                      <li key={country.id} className="p-2 hover:bg-gray-100 rounded cursor-pointer" onClick={() => { setSearchQuery(country.country), setIsClicked(true) }}>
                        {country.country}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
                <p className="mt-2 text-sm text-gray-500" aria-live="polite">
                  {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'} found
                </p>
              </>
            )}
            {searchQuery.trim() === "" && (
              <p className="mt-2 text-sm text-gray-500" aria-live="polite">
                Enter a search query to see results
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 mt-5">
          {isClicked ? (
            <button
              onClick={handleClick}
              className="cursor-pointer bg-customGreen pl-[130px] pr-[130px] pt-[15px] pb-[15px] rounded-full text-white  "
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
        </div>
      </div>
    </>
  );
};

export default QuizNo18;
