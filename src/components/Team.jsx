import React from "react";

const Team = ({ team }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-16 h-16 rounded-full border border-white/10 flex justify-center items-center">
        <span className="font-bold">{team.charAt(0)}</span>
      </div>
      <span className="text-center text-xs font-bold">
        {team?.slice(0, 3).toUpperCase()}
      </span>
    </div>
  );
};

export default Team;
