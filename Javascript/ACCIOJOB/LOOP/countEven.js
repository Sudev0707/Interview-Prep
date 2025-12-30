


function countUntilOdd(arr) {
    let count = 0;

    for (let num of arr) {
        count++;
        if (num % 2 !== 0) {
            console.log(count);
            return;
        }
    }
}

countUntilOdd([4, 6, 8, 10, 7, 12]);
