const express = require('express');
const app = express();
const PORT = process.env.PORT || 3050;
const authorRouter = require('./routers/author');

const Author = require('./models/author');

app.use('/authors', authorRouter);

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));