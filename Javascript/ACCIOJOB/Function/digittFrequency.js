

// Digit Frequency Counter
function digitFrequency(num) {
  let freq = Array(10).fill(0);
  num = Math.abs(num);

  while (num > 0) {
    let digit = num % 10;
    freq[digit]++;
    num = Math.floor(num / 10);
  }

  for (let i = 0; i < 10; i++) {
    if (freq[i] > 0) {
      console.log(`${i} -> ${freq[i]}`);
    }
  }
}

digitFrequency(120345303);



// =============

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  let [num, digit] = input.split(' ');
  let count = 0;

  for (let ch of num) {
    if (ch === digit) {
      count++;
    }
  }

  console.log(count);
  rl.close();
});


