import React, { Component } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';

class Form extends Component {

  constructor() {
    super();

    this.state = {
      passWord: "",
      eyePassword: false,
    };

    this.handlePassword = this.handlePassword.bind(this);
    this.handleEyePassword = this.handleEyePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    }, () => console.log(this.state.password))
    // console.log(this.state.password);
  }

  handleEyePassword() {
    this.setState((prevState) => ({
      eyePassord: !prevState.eyePassord
    }))
  }

  render () {
    const { eyePassord } = this.state;
    return (
      <div className="password--input">
        <label htmlFor="">Password </label>
        <input type={eyePassord ? "text" : "password"} onChange={this.handlePassword}/>
        {eyePassord ? <FaEye className="eye" onClick={this.handleEyePassword}/> : <FaEyeSlash className="eye" onClick={this.handleEyePassword}/>}
      </div>
    )
  }
}

export default Form;