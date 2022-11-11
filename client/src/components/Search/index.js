import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ search, setSearch }) => {
  const submitSearch = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <form onSubmit={submitSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onFocus={(e) => (e.target.placeholder = "")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <FaSearch className="search-icon" onClick={submitSearch} />
    </form>
  );
};

export default Search;
