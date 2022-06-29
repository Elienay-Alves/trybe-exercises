const divNumber = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('This number is not divided for zero'));

    const result = num1 / num2;
    resolve(result);
  })

  console.log(promise);
}

divNumber(2,1)
//   .then(result => console.log(`sucess: ${result}`))
//   .catch(err => console.log(`error: ${err.message}`));