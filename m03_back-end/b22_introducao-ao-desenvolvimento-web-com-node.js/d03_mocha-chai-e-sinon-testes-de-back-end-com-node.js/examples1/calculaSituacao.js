const calculaSituacao = (media) => {
  if (media >= 7) {
    return 'Aprovação';
  } else if (media < 7) {
    return 'Reprovação';
  }
}

module.exports = {
  calculaSituacao,
}