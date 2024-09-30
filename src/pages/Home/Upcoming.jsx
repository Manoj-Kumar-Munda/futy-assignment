import React, { useCallback, useEffect, useRef, useState } from "react";
import data from "../../../data/data.json";
import Currency from "../../components/Currency";
import { formatDate, formateTime } from "../../utils/helpers";
import Team from "../../components/Team";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { nanoid } from "nanoid";

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
      if (rect.top <= 20 && rect.bottom > 0) {
        setCurrentElement(element?.querySelector("#date")?.innerText);
      }
    });
  }, []);

  useMotionValueEvent(scrollY, "change", handleScroll);

  return (
    <div
      className="
    relative max-w-screen-lg  w-full mx-auto pt-20 space-y-3"
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
          className="flex flex-col gap-1 items-center"
          key={match?.date}
        >
          <div className="relative w-full h-[1px] bg-white/10">
            <span
              id="date"
              className="absolute inline-block border rounded-lg px-2 border-white/20 text-sm left-1/2 -translate-x-1/2 -top-3"
            >
              {formatDate(match.date)}
            </span>
          </div>


          <div className="flex gap-2 flex-wrap justify-center">

          {match?.games?.map((game) => (
            <div
              key={nanoid()}
              className="relative my-5 flex flex-col gap-2  border-t-4 rounded-lg"
            >
              <div className="absolute bg-white -top-3 left-1/2 -translate-x-1/2 rounded-xl">
                <div className="inline-flex gap-2 items-center px-2">
                  <Currency className={"text-black border-black"} />
                  <span className="text-black font-bold text-sm">2100</span>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-6 items-center py-3">
                <Team team={game?.team1} />
                
                <div className="inline-flex flex-col items-center">

                  <span>vs</span>
                  <span>{game?.time}</span>
                </div>
              
                <Team team={game?.team2} />
              </div>

              <div className="bg-green-600 text-center rounded-lg mx-2">
                <span className="uppercase text-sm font-medium">Join Game</span>
              </div>
            </div>
          ))}

          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
