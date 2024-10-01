import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { findMatchesByTeam } from "../../utils/helpers";
import MatchCard from "../../components/MatchCard";
import { nanoid } from "nanoid";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);

  console.log(searchParams.get("searchBy"));

  useEffect(() => {
    if (searchParams.get("searchBy") === "Team") {
      console.log(findMatchesByTeam("ars"));
      setData(findMatchesByTeam(searchParams.get("input")));
    }
  }, [searchParams]);

  console.log(data);

  return (
    <div className="pt-16 px-2 sm:px-4">
      <div className="flex justify-center items-center">
        <div className="max-w-screen-sm w-full">
          {data?.length > 0 &&
            data?.map((match) => <MatchCard key={nanoid} game={match} showDate={true} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
