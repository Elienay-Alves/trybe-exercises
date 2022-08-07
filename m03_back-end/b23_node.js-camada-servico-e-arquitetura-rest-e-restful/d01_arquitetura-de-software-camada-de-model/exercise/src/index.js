const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();

app.use('/user', userRoute);

app.listen(3600, () => console.log('Rodando na 3600!'));
