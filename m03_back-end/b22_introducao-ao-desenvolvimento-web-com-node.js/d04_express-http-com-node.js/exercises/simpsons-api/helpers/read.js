const { readFile } = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'simpsons.json')

const read = async () => {
    const fileContent = await readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
};

module.exports = read;