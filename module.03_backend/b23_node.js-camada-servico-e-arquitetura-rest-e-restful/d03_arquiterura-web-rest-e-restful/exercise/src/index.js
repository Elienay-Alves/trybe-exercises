const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routers/Products');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRouter);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});