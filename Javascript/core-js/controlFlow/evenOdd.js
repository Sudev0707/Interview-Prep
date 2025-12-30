
// Check if a number is even or odd.

function checkNumber(n) {

    const result = n % 2 === 0 ? " Even" : " Odd"
    console.log("\n result ", n%2, ":", result ); 
}

checkNumber(8)