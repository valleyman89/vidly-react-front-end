import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string().email().required().label("username"),
    password: Joi.string().required().min(5).label("password"),
    name: Joi.string().required().label("name"),
  };

  render() {
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
