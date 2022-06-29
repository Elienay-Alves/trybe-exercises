const fs = require('fs').promises;

const fileName = 'my-file.txt';

fs.readFile(fileName, 'utf8')
  .then((data) => {
    console.log(`File content: ${data}`);
  })
  .catch((err) => {
    console.error(`It's not possible to read the file ${fileName}\n Error: ${err}`);
    process.exit(1);
  });