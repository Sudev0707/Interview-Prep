

// Take two numbers and print the larger one. 

function checklargeNumber(a, b) {

    const large = a > b ? `${a} is larger` : `${b} is larger`;

    console.log(" large number : ", large);

}

// checklargeNumber(8, 0)

// Take three numbers and print the largest

function chekLarge(a, b, c) {
    const large = a > b && a > c ? ` ${a} is larger` : b > a && b > c ? ` ${b} is larger` : ` ${c} is larger `
    console.log(large, "");
    
}
chekLarge(9, 80, 66)