import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { findMatchesByDate, findMatchesByTeam } from "../../utils/helpers";
import MatchCard from "../../components/MatchCard";
import { nanoid } from "nanoid";
import NoMatch from "../../components/NoMatch";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchParams.get("searchBy") === "Team") {
      setData(findMatchesByTeam(searchParams.get("input")));
    }
    if (searchParams.get("searchBy") === "Date") {
      setData(findMatchesByDate(searchParams.get("input")));
    }
  }, [searchParams]);

  return (
    <div className="pt-16 px-2 sm:px-4">
      <div className="flex justify-center items-center">
        <div className="max-w-screen-sm w-full">
          {data?.length === 0 ? (
            <NoMatch />
          ) : (
            data?.map((match) => (
              <MatchCard key={nanoid} game={match} showDate={true} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
