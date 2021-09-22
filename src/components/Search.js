import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const onChange = (q) => {
    setSearchQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search"
          autoFocus
          value={searchQuery}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
