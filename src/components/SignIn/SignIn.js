import React, { Component } from "react";
import "./SignInSASS.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  //   form change event
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  //   input change event
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="password"
          />
          {/* <input type="submit" value="Submit Form" /> */}
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
