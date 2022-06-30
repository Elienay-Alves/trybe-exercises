
const exercise01 = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error('Informe apenas números'));

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'))
    }

    resolve(result);
  })

  return promise;
}

exercise01(10, 20, 's')
  .then(console.log)
  .catch(error => console.log(error.message));