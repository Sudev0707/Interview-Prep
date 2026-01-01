

// 
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
readline.on('line', line => {
  input.push(line.trim());
});

readline.on('close', () => {
  let t = parseInt(input[0]);
  
  for (let i = 1; i <= t; i++) {
    console.log(binToDec(input[i]));
  }
});

function binToDec(s) {
  return parseInt(s, 2);
}



// ====================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let t;

rl.on('line', (input) => {
  if (!t) {
    t = parseInt(input);
  } else {
    let ans = binToDec(input);
    console.log(ans);
    t -= 1;
    if (t === 0) {
      rl.close();
    }
  }
});

function binToDec(s) {
  let decimal = 0;
  for (let i = 0; i < s.length; i++) {
    decimal = decimal * 2 + Number(s[i]);
  }
  return decimal;
}


