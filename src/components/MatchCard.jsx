import React from "react";
import Team from "./Team";
import Currency from "./Currency";
import { nanoid } from "nanoid";

const MatchCard = ({game, showDate=false}) => {
  return (
    <div
      className="relative my-5 flex flex-col gap-2  border-t-4 rounded-lg"
    >
      <div className="absolute bg-white -top-3 left-1/2 -translate-x-1/2 rounded-xl">
        <div className="inline-flex gap-2 items-center px-2">
          <Currency className={"text-black border-black"} />
          <span className="text-black font-bold text-sm">2100</span>
        </div>
      </div>
      <div className="flex justify-between gap-2 sm:gap-6 items-center py-3">
        <Team team={game?.team1} />

        <div className="inline-flex flex-col items-center">
          {
            showDate && <span>Sep 28</span>

          }
          
        
          <span>{game?.time}</span>
        </div>

        <Team team={game?.team2} />
      </div>

      <div className="bg-green-600 text-center rounded-lg mx-2">
        <span className="uppercase text-sm font-medium">Join Game</span>
      </div>
    </div>
  );
};

export default MatchCard;
