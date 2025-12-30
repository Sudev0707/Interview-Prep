
// Take a number and print whether it’s positive, negative, or zero.

function checkNumber(n) {

    const result = n < 0 ? "Negative" : n === 0 ? "Zero" : n > 0 ? "Positive" : "undefined"
    console.log("Result : ", n, result);

}

checkNumber(-4);

