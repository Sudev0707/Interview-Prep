

// 

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  let res = determineSecondLastDigit(parseInt(n));
  if (res)
    console.log('Yes');
  else
    console.log('No');
  readline.close();
});

function determineSecondLastDigit(n) {
  n = Math.abs(n);              // handle negative numbers
  if (n < 10) return false;     // no second last digit

  let secondLastDigit = Math.floor(n / 10) % 10;
  return secondLastDigit === 0;
}
