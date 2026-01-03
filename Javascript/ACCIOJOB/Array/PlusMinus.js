
// 
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', line => {
  input.push(line);
});

readline.on('close', () => {
  const n = parseInt(input[0]);
  const arr = input[1].split(' ').map(Number);

  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let num of arr) {
    if (num > 0) positive++;
    else if (num < 0) negative++;
    else zero++;
  }

  console.log((positive / n).toFixed(6));
  console.log((negative / n).toFixed(6));
  console.log((zero / n).toFixed(6));
});
