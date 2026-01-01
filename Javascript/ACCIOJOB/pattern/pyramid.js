
// 

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  n = parseInt(n);

  for (let i = 1; i <= n; i++) {
    let str = "";

    // spaces
    for (let space = n - i; space > 0; space--) {
      str += " ";
    }

    // #
    for (let hash = 1; hash <= (2 * i - 1); hash++) {
      str += "#";
    }

    console.log(str);
  }

  readline.close();
});
// ===============
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('', n => {
//   n = parseInt(n);

//   for (let i = 1; i <= n; i++) {
//     let line = "";

//     // spaces
//     for (let s = 1; s <= n - i; s++) {
//       line += " ";
//     }

//     // stars
//     for (let star = 1; star <= 2 * i - 1; star++) {
//       line += "*";
//     }

//     console.log(line);
//   }

//   readline.close();
// });

