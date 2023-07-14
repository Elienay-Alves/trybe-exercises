const fs = require('fs');

const leArquivo = (nomeDoArquivo) => {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf-8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;