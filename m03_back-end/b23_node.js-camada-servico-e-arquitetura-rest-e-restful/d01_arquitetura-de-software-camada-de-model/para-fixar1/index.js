const express = require('express');
const app = express();
const PORT = process.env.PORT || 3090;
const bookRouter = require('./routers/books')
// const Book = require('./models/Book');

app.use('/books', bookRouter);

app.listen(PORT, () => console.log(`para fixar listening on PORT ${PORT}!`));