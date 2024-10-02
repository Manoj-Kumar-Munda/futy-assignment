import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  getTodaysMatches
} from "../../utils/helpers";
import { useMotionValueEvent, useScroll } from "framer-motion";
import MatchRow from "../../components/MatchRow";

const Live = () => {
  const [currentElement, setCurrentElement] = useState(null);
  const [data, setData] = useState([]);
  const { scrollY } = useScroll();
  const [showDate, setShowDate] = useState(false);
  const elementsRef = useRef([]);

  useEffect(() => {
    setData(getTodaysMatches());
  }, []);
  const handleShowDateWithDebouncing = () => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowDate(false);
      }, 1500);
    };
  };

  const handleScroll = useCallback(() => {
    if (scrollY.current > 0) {
      setShowDate(true);
      const debounce = handleShowDateWithDebouncing();
      debounce();
    } else {
      setShowDate(false);
    }

    elementsRef.current.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 20 && rect.bottom > 0) {
        setCurrentElement(element?.querySelector("#date")?.innerText);
      }
    });
  }, []);

  useMotionValueEvent(scrollY, "change", handleScroll);
  return (
    <>
      <div className="z-50 fixed top-16 left-0 right-0 flex justify-center ">
        {showDate && (
          <span className="bg-red-600 text-white inline-block px-2 rounded-full py-0.5 text-sm font-bold">
            {currentElement}
          </span>
        )}
      </div>
      {data?.length === 0 ? (
        <div className="my-4 min-h-40 grid place-content-center ">
          <span className="">No matches today</span>
        </div>
      ) : (
        data?.map((match, index) => (
          <div
            ref={(el) => (elementsRef.current[index] = el)}
            className="flex flex-col gap-1 items-center"
            key={match?.date}
          >
            <MatchRow match={match} />
          </div>
        ))
      )}
    </>
  );
};

export default Live;
