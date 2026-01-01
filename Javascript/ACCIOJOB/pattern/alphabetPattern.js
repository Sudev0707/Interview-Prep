

// 

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (input) => {
  const n = Number(input);

  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(65 + j) + " ";
    }
    console.log(line.trim());
  }
  rl.close();
});


// =====
const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

rl.on("line", (input) => {
  const n = Number(input);

  for (let i = 1; i <= n; i++) {
    // Get the letter corresponding to the row
    let ch = String.fromCharCode(64 + i);
    // Repeat the letter i times
    console.log(ch.repeat(i));
  }

  rl.close();
});
