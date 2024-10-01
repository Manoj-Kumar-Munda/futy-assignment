import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { findMatchesByTeam } from "../../utils/helpers";

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
  return (
    <div className="pt-16">
      <span className="text-xl text-white">HJ</span>
    </div>
  );
};

export default SearchResult;
