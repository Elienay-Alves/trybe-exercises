import React, { Component } from 'react';
import './App.css';
// import Buttons from './components/Buttons';
// import buttons from './data';

// function 

// 
export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      button1: 0,
      button2: 0,
      button3: 0,
      cor1: '',
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    this.setState((prevState, _props) => ({
      button1: prevState.button1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.corDoBotao(this.state.button1)}`)
    })
  }

  handleClick2() {
    this.setState((prevState, _props) => ({
      button2: prevState.button2 + 1,
    }), () => {
      console.log(`Botão 2 ${this.corDoBotao(this.state.button2)}`)
    })
  }

  handleClick3() {
    this.setState((prevState, _props) => ({
      button3: prevState.button3 + 1,
    }), () => {
      console.log(`Botão 3 ${this.corDoBotao(this.state.button3)}`)
    })
  }

  corDoBotao = (num) => num % 2 === 0 ? 'green' : 'white';

  render() {
    const { button1, button2, button3 } = this.state;
    return (
      <div className='App'>
        <button
          onClick={ this.handleClick1 }
          style={{ backgroundColor: this.corDoBotao(button1) }}>
          Você clicou no primeiro botão { button1 } vezes
        </button>
        <button
          onClick={ this.handleClick2 }
          style={{ backgroundColor: this.corDoBotao(button2) }}>
            Você clicou no segundo botão { button2 } vezes
        </button>
        <button
          onClick={ this.handleClick3 }
          style={{ backgroundColor: this.corDoBotao(button3) }}>
            Você clicou no terceiro { button3 } vezes
        </button>
      </div>
    )
  }
}

