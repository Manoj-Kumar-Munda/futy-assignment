import React, { useCallback, useEffect, useRef, useState } from "react";
import data from "../../../data/data.json";
import { formatDate, formateTime } from "../../utils/helpers";
import Team from "../../components/Team";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Upcoming = () => {
  const [currentElement, setCurrentElement] = useState(null);
  const { scrollY } = useScroll();
  const [showDate, setShowDate] = useState(false);
  const elementsRef = useRef([]);

  const handleShowDateWithDebouncing = () => {
    let timer;
    return () => {
      clearTimeout(timer);
      setTimeout(() => {
        setShowDate(false);
      }, 1500);
    };
  };

  let timer;
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
      if (rect.top <= 10 && rect.bottom > 0) {
        setCurrentElement(element?.querySelector("#date")?.innerText);
      }
    });
  }, []);

  useMotionValueEvent(scrollY, "change", handleScroll);

  return (
    <div
      className="
    relative max-w-screen-sm  w-full mx-auto pt-20 space-y-3"
    >
      <div className="z-50 fixed top-16 left-0 right-0 flex justify-center ">
        {showDate && (
          <span className="bg-red-600 text-white inline-block px-2 rounded-full py-0.5 text-sm font-bold">
            {currentElement}
          </span>
        )}
      </div>
      {data?.matches?.map((match, index) => (
        <div
          ref={(el) => (elementsRef.current[index] = el)}
          className="flex flex-col gap-1"
          key={match?.dateTime}
        >
          <div className="relative w-full h-[1px] bg-white/10">
            <span
              id="date"
              className="absolute inline-block border rounded-lg px-2 border-white/20 text-sm left-1/2 -translate-x-1/2 -top-3"
            >
              {formatDate(match.dateTime)}
            </span>
          </div>

          <div className="py-4 flex justify-center items-center">
            <div className="flex items-center gap-6">
              <Team team={match?.team1} />
              <div className="flex flex-col items-center">
                <span>vs</span>
                <span className="text-sm font-semibold">
                  {formateTime(match?.dateTime)}
                </span>
              </div>
              <Team team={match?.team2} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
