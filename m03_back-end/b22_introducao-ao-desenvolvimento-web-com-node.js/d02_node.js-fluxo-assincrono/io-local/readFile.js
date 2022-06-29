const fs = require('fs');

const fileName = 'my-file.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`It's not possible to read the file ${fileName}\n Error: ${err}`);
    process.exit(1);
  }
  console.log(`File content: ${data}`);
})