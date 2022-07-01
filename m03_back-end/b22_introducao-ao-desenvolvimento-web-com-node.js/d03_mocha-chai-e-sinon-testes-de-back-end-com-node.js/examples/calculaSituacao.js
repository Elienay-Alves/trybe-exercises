const calculaSituacao = (media) => {
  if (media > 7) {
    return 'Aprovação';
  }

  return 'Reprovação';
}

module.exports = calculaSituacao;