const { questionInt } = require('readline-sync');
const { scripts } = require('./data/scripts');


const escolherScript = () => {
  const enunciado = 'Escolha um número para executar o script correspondente\n';
  const mensagem = scripts.reduce((message, script, index) => `${message}${index + 1} - ${script.name}\n`, enunciado);
  const numeroEscolhido = questionInt(mensagem) - 1;
  const script = scripts[numeroEscolhido];
  return script;
}

const main = () => {
  const script = escolherScript();
  if (!script) return console.log('Número inválido. Saindo');
  require(script.path)
}

main();