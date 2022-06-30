const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();
      resolve(answer);
    })
  })
}

const start = async () => {
  const fileName = await question('Arquivo a ser lido: ')
}

start();