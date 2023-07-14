const { readFile } = require('fs').promises;

const simpsons = () => {
  readFile('./simpsons.json', 'utf-8')
    .then((content) => {
      const simpsonsFree = JSON.parse(content)
      const string = simpsonsFree.map(({ id, name }) => `${id} - ${name}`);
      
      string.forEach((strin) => console.log(strin));
    })
    .catch(err => console.error(err));
}

const main = () => {
  simpsons();
}

main();