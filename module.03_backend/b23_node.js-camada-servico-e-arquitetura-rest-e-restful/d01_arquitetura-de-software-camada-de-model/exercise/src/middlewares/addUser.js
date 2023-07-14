const rescue = require('express-rescue');
const userModel = require('../models/userModel');

// Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model
module.exports = [
  (req, res, next) => {
    // Pedimos ao Joi que valide o corpo da requisição de acordo com o que definimos em seu schema
    const { error } = userModel.isValid(req.body);

    // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
    if (error) return next(error);

    // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware
    next();
  },
  rescue(async (req, res) => {
    // Extraimos os dados da requisição
    const { firstName, lastName, email, password } = req.body;

    // Pedimos pro model criar o usuario
    const newUser = await userModel
      .create({ firstName, lastName, email, password });

      // Com o usuario criado, devolvemos o status 201 created, a mensagem informando sucesso na operação
      res.status(201).json(newUser);
  }),
];