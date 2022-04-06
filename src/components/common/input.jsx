import React, { Component } from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        id={name}
        name={name}
        onChange={onChange}
        type="text"
        value={value}
      />
    </div>
  );
};

export default Input;
