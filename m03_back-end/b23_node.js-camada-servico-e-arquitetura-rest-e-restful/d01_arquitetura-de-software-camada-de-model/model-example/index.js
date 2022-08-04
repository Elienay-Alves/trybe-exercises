const express = require('express');
const app = express();
const PORT = process.env.PORT || 3050;

const Author = require('./models/author');

app.get('/authors', async (req, res) => {
  const authors = await Author.readAll();

  res.status(200).json(authors);
})

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));