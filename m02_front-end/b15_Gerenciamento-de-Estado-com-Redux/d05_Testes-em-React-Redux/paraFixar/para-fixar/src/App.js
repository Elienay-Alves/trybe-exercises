import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ButtonClicks from './ButtonClicks';
import NumberClickis from './NumberClicks';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          <ButtonClicks />
          <NumberClickis />
        </Provider>
      </div>
    )
  }
}

export default App;
