import React from "react";
import { formatDate } from "../utils/helpers";
import { nanoid } from "nanoid";
import MatchCard from "./MatchCard";

const MatchRow = ({match}) => {
  return (
    <>
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
          <MatchCard key={nanoid()} game={game} />
        ))}
      </div>
    </>
  );
};

export default MatchRow;
