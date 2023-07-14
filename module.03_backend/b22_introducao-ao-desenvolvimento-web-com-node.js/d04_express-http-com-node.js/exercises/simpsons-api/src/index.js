const express = require('express');
const simpsonsRouter = require('../routes/simpsons')

const api = express();
api.use(express.json())

api.use('/simpsons', simpsonsRouter);

api.get('/', (req, res) => {
  res.send('birrrlll')
})

api.listen(4600, () => {
  console.log('O monstro ta na 4600');
})