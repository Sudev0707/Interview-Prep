

// calculate power
// Two numbers are entered through the keyboard. Write a program to find the value of one number raised to the power of another


// with method
function calculatePower(n, power) {
    const result = Math.pow(n, power);

    console.log(`power of ${n}: `, result);

}

calculatePower(4, 5)

function calculatePow(base, exponent) {
     let res = 1;

    for (let i = 1; i <= exponent; i++) {
        res = res * base;
    }
    console.log(res, "...");
    

}
calculatePow(4, 6)