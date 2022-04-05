import React, { Component } from "react";
import Select from "./select";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      option: '',
      fullName: '',
      aboutMe: '',
      submit: 'false',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {

    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        <h1>Componente Controlado</h1>
        <form>
          <Select 
          value={this.state.value} 
          handleChange={this.handleChange}/>
          <br />
          <br />
          <fieldset>
            <input 
            name="fullName" 
            value={this.state.value} 
            type="text" 
            onChange={this.handleChange} />
          </fieldset>
          <br />
          <br />
          <label>
          <textarea 
          name="aboutMe" 
          id="" 
          cols="30" 
          rows="10" 
          value={this.state.value} 
          onChange={this.handleChange}>
          </textarea>
          </label>
          <br />
          <br />
          <input type="file" />
          <br />
          <label>
            <button name="submit" value={this.state.value} onClick={this.handleChange}> Enviar</button>
          </label>
        </form>
      </div>
    )
  }
}

export default Form;