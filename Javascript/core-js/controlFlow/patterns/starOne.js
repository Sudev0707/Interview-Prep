

// 
function pattern(n) {
    for (let i = 0; i <= n; i++) {
        let line = ""

        for (let j = 0; j <= n; j++) {


            if (i === 0 || j === 0) {
                line = line + "*"
            } else {
                line = line + " "
            }
        }

        console.log(line);
    }


}

pattern(4)