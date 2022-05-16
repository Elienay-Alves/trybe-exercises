// ################### IPORTAÇÃO DO REDUX ###########################
const Redux = require('redux');

// ################### FAZENDO ACTION CREATOR #######################
const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
})

// ################### ESCREVENDO ESTADO INICIAL ####################
const ESTADO_INICIAL = {
  login: false,
  email: '',
}

// ################### MONTANDO O REDUCER ############################
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

// ################### CRIAÇÃO DA STORE ##############################
const store = Redux.createStore(reducer);

console.log(store.getState());