import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.showMessage1 = this.showMessage1.bind(this);
    this.showMessage2 = this.showMessage2.bind(this);
    this.showMessage3 = this.showMessage3.bind(this);
  }

  showMessage1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }));
  }
  
  showMessage2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }));
  }
  
  showMessage3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }));
  };

  render () { 
    return (
      <div id="containner">
        <button onClick={this.showMessage1}>{this.state.numeroDeCliques1}</button>
        <button onClick={this.showMessage2}>{this.state.numeroDeCliques2}</button>
        <button onClick={this.showMessage3}>{this.state.numeroDeCliques3}</button>
      </div>
    )
  };
}

export default App;
