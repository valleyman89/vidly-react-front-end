import React, { Component } from "react";

const Input = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
