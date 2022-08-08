const express = require('express');
const authorRoute = require('./routes/authorRoute');

const app = express();
app.use('/authors', authorRoute);

app.listen(3660, () => {
console.log('Listen on 3660');
});