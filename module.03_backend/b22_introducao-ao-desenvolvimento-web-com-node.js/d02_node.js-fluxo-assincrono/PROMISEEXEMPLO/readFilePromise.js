const readFile = require('fs');

const readFilePromise = (fileName) =>{
  return new Promise((resolve, reject) => {
    readFile.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  })
}

readFilePromise('./file.txt')
  .then((content) => {
    console.log(`File readed with ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.log(`error: ${err.message}`);
  });