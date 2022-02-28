import React, { Component } from "react";

class Select extends Component {
  render() {
    const {value, handleChange } = this.props;
    return(
      <select 
      name="option" 
      value={ value } 
      onChange={ handleChange }>
        <option 
        value="Opção1">
          Opção 1
        </option>
        <option 
        value="Opção2">
          Opção 2
        </option>
      </select>
    )
  }
}

export default Select;