

// Check if a given year is a leap year. 

function chekLeapYear(year) {
    if (typeof year !== "number") {
        return console.log('enter valid year');

    }
    const leapYear = year % 400 === 0 || (year % 4 === 0 && year % !100 === 0) ? "Leap" : "Not leap year"
    console.log(leapYear);

}

chekLeapYear(1900)