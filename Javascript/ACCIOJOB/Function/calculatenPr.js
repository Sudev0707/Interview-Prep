
// Calculate nPr
// Given 2 numbers n and r. Your task is to calculate nPr n!/(n-r)!.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', r => {
    console.log(solve(parseInt(n), parseInt(r)));
    readline.close();
  });
});

function solve(n, r) {
  if (r > n) return 0;

  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= (n - i);
  }
  return result;
}


