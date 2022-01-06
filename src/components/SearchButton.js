import React from "react";

const SearchButton = ({onSearchClick}) => {
  return (
    <div>
      <button className="search-button" onClick={onSearchClick}>Search</button>
    </div>
  );
};

export default SearchButton;
