import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(evt) => {
        onChange(evt.target.value);
      }}
    />
  );
};

export default SearchBox;
