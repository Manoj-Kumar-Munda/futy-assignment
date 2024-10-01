import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import useSearchContext from "./searchContext";
import {
  createSearchParams,
  useNavigate,
} from "react-router-dom";

const SearchBtn = () => {
  const { input, searchBy } = useSearchContext();
  const navigate = useNavigate();
  console.log(input);

  return (
    <button
      onClick={() => {
        navigate({
          pathname: "./search",
          search: createSearchParams({
            searchBy,
            input
          }).toString(),
        });
      }}
    >
      <IoSearchOutline size={20} color="#fff" />
    </button>
  );
};

export default SearchBtn;
