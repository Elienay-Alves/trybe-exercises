// ################### IPORTAÇÃO DO REDUX ############################
const Redux = require('redux');

// ################### ESCREVENDO ESTADO INICIAL ####################
const ESTADO_INICIAL = {
  login: false,
  email: '',
}

// ################### MONTANDO O REDUCER ############################
const reducer = (state = ESTADO_INICIAL) => state;

// ################### CRIAÇÃO DA STORE ##############################
const store = Redux.createStore(reducer);

