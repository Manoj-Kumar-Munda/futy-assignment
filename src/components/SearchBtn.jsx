import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import useSearchContext from "./searchContext";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchBtn = () => {
  const { input, searchBy } = useSearchContext();
  const navigate = useNavigate();
  const onclickHandler = () => {
    if ((input === "")) {
      return;
    }

    navigate({
      pathname: "./search",
      search: createSearchParams({
        searchBy,
        input,
      }).toString(),
    });
  };

  return (
    <button onClick={onclickHandler}>
      <IoSearchOutline size={20} color="#fff" />
    </button>
  );
};

export default SearchBtn;
