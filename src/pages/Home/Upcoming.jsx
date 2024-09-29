import React from "react";
import data from "../../../data/data.json";
import { formatDate } from "../../utils/helpers";

const Upcoming = () => {
  return (
    <div className="max-w-screen-sm  w-full mx-auto pt-20 space-y-3">
      {data?.matches?.map((match) => (
        <div className="flex flex-col gap-1" key={match?.dateTime}>
          <div className="relative w-full h-[1px] bg-white/10">
            <span className="absolute inline-block border rounded-lg px-2 border-white/20 text-sm left-1/2 -translate-x-1/2 -top-3">{formatDate(match.dateTime)}</span>
          </div>

          <div className="py-4 flex justify-center items-center">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/10 flex justify-center items-center">
                <span className="font-bold">{match?.team1?.charAt(0)}</span>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/10 flex justify-center items-center">
                <span className="font-bold">{match?.team2?.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
