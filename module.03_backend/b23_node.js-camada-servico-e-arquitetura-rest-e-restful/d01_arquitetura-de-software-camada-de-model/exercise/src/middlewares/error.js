module.exports = (err, req, res, _next) => {
  // Caso o erro possua uma propriedade `status`, devolvemos esse status, juntamente com a mensagem do erro
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  // Caso seja erro do joi
  if (err.isJoi) {
    // Devolvemos o status 404 Bad Request com a mensagem de erro que o Joi gerou.
    return res.status(400).json({ message: err.details[0].message });
  }

  // Caso o erro não seja de nenhum dos dois tipos acima, ele é um erro desconhecido

  // Imprimimos o erro no console para que possamos debuga-lo
  console.error(err);

  // Retornamos o status 500 Internal Server Error, e uma mensagem avisando que houve um erro.
  res.status(500).json({ message: 'Erro interno do servidor' });
};