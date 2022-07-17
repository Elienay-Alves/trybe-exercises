const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("hello World")
})

app.listen(3100, () => console.log('App rodando na porta 3100'));