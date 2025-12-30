

// n! = n × (n − 1) × (n − 2) × ... × 1
// Approach (Think Like This)
// Start with result = 1
// Multiply numbers from 1 to n
// Print / return result


function checkfactorial(n) {
    let facto = 1;

    // for (let i = 1; i <= n; i++) {
    //     facto = facto * i

    // }
    // console.log(facto)
    // 
    while (n > 0) {
        facto = facto * n
        n --
    }
    console.log(facto)
}



checkfactorial(8)