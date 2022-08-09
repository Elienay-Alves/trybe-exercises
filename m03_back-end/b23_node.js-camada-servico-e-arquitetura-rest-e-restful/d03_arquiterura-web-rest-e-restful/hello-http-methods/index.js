// index.js

const fetch = require('node-fetch');

// Armazenamos o token numa variável.
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criamos um novo objeto de Headers
const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-Type': 'application/json',
});

// Depois, criamos o body
const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'});

// Para aquecer, vamos começar com uma requisição do tipo `GET`
fetch('https://postman-echo.com/post?param1=teste', {
  method: 'POST',
  body,
})
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorOrResponse) => {
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    console.error(errorOrResponse);
  });