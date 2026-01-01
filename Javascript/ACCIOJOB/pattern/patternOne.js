

//    #
//   ##
//  ###
// ####


let rows = 4;

for (let i = 1; i <= rows; i++) {
  let pattern = "";

  // print spaces
  for (let space = rows - i; space > 0; space--) {
    pattern += " ";
  }

  // print #
  for (let hash = 1; hash <= i; hash++) {
    pattern += "*";
  }

  console.log(pattern);
}


// 
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}

// staircase(6)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  n = parseInt(n);

  for (let i = 1; i <= n; i++) {
    let str = "";

    // spaces
    for (let j = n - i; j > 0; j--) {
      str += " ";
    }

    // #
    for (let k = 1; k <= i; k++) {
      str += "#";
    }

    console.log(str);
  }

  readline.close();
});

