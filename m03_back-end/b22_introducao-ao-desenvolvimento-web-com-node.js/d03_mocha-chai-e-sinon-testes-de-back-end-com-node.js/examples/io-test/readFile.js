const fs = require('fs');

const readFile = (fileName) => {
  try {
    const fileContent = fs.readFileSync(fileName, 'utf-8');

    return fileContent;
  } catch (erro) {
    return null
  }
}
module.exports = readFile;