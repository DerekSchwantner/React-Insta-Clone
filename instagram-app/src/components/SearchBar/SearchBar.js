import React from "react";

const SearchBar = props => {
  // console.log(props.);
  return (
    <div className="search-bar">
      <input type="text" className="input" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
