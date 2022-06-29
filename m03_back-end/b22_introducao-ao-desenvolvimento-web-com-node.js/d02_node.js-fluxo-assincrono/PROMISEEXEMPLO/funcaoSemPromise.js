const divNumber = (num1, num2) => {
  if (num2 == 0) throw new Error('Number can not be divided for zero');

  return num1 / num2;
}

try {
  const result = divNumber(2,0);
  console.log(`result: ${result}`);
} catch (err) {
  console.log(`error: ${err.message}`);
}