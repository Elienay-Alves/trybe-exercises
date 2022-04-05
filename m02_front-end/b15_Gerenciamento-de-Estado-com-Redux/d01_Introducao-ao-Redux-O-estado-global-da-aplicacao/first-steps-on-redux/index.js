// ################### IPORTAÇÃO DO REDUX ############################
const Redux = require('redux');

// ################### MONTANDO O REDUCER ############################
const reducer = (state = { login: false, email: '' }) => state;

// ################### CRIAÇÃO DA STORE ##############################
const store = Redux.createStore(reducer);

