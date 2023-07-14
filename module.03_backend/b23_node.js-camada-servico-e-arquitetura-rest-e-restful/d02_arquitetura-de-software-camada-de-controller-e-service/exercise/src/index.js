require('dotenv').config();
const express = require('express');

const app = express();

const pingRoute = require('./routes/Ping');
const cepRoute = require('./routes/Cep');

app.use('/ping', pingRoute);
app.use('/cep', cepRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
