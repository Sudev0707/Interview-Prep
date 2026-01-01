
// Input
// 5

// Output
// A
// BC
// CDE
// DEFG
// EFGHI



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  n = Number(n);
  let startCharCode = 'A'.charCodeAt(0);

  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      let charCode = (i + j) % 26 + startCharCode;
      row += String.fromCharCode(charCode);
    }
    console.log(row);
  }

  readline.close();
});
