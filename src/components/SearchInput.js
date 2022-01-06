import React from "react";

const SearchInput = ({ onSearch, searchValue, placeholder }) => {
  return (
    <div>
      <input
        type="search"
        value={searchValue ? searchValue : ""}
        className="search-input"
        onChange={onSearch}
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};

export default SearchInput;
