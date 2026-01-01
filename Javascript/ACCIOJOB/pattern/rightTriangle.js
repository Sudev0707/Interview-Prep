

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  n = Number(n);
  
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }

  readline.close();
});
