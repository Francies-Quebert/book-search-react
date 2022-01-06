import React from "react";

const SearchButton = ({ onSearchClick, disabled }) => {
  return (
    <div>
      <button
        className="search-button"
        onClick={onSearchClick}
        disabled={disabled}
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
