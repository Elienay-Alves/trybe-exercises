const express = require('express');
const authorRoute = require('./routes/authorRoute');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use('/authors', authorRoute);

app.use(errorMiddleware);

app.listen(3660, () => {
console.log('Listen on 3660');
});