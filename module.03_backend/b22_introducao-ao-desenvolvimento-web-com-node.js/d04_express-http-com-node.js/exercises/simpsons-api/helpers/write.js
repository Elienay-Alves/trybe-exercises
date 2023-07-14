const { writeFile } = require('fs').promises;

const write = async (something) => {
    writeFile('./simpsons.json', JSON.stringify(something))
};

module.exports = write;