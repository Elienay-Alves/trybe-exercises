const fs = require('fs').promises;
const readLine = require('readline');

const question = (message) => {
  const readLineInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readLineInterface.question(message, (answer) => {
      readLineInterface.close();

      resolve(answer);
    })
  })
}

const start = async () => {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const fileContent = await fs.readFile(fileName, 'utf8');
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}
start();