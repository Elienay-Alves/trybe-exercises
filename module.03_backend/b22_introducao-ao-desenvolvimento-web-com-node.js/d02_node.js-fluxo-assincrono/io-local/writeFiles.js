/*
const { writeFile } = require('fs').promises;

writeFile('./my-created-file.txt', 'I don\'t believe you are here again kkk')
  .then (() => {
    console.log('File created with sucess!');
  })
  .catch((err) => {
    console.error(`Error writing the file: ${err.message}`);
  });
*/

//---------- Agora utilizando Async/Await ---------//

const { writeFile } = require('fs').promises;

const main = async () => {
  try {
    await writeFile('./my-created-file.txt', 'I don\'t believe you are here again kkk');
    console.log('File created with sucess!');
  } catch (err) {
    console.error(`Error writing the file: ${err.message}`);
  }
}

main();