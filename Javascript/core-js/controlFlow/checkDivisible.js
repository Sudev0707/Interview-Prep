

//  Check if a number is divisible by 5. 

function checkDivisible(n) {

    if (typeof n !== "number") {
        return console.log(" \n Enter digit");
    }


    const result = n % 5 === 0 ? "Divisible" : "Not divisible"
    console.log("result: ", n % 5, ":", result);

}
// checkDivisible(60)

// Check if a number is divisible by 3 and 5


function checkDivisiblee(n) {
    if (typeof n !== "number") {
        return console.log(" \n Enter digit");
    }

    const result = n % 5 === 0 && n % 3 === 0 ? `${n} is divisible by 3 and 5` : "not divisible"
    console.log(result);

}

// checkDivisiblee(30)


