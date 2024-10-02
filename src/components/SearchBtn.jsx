import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import useSearchContext from "./searchContext";
import { createSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.button onClick={onclickHandler}>
      <IoSearchOutline size={20} color="#fff" />
    </motion.button>
  );
};

export default SearchBtn;
