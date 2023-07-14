const { writeFile } = require('fs').promises;

writeFile('./my-new-file.txt', 'I wasn\'t here :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('File Saved');
  })
  .catch((err) => {
    console.error(err);
  });