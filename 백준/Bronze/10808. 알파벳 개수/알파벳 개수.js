function solution(input) {
    let resultArray = new Array(26).fill(0);

    for(let i = 0; i < input.length; i++) {
        for(let j = 97; j <= 122; j++) {
            if(input[i] === String.fromCharCode(j)) {
                resultArray[j - 97] += 1;
            }
        }
    }
    
    console.log(resultArray.join(' '));
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
        output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line; 
    rl.close();
}).on("close", function () {
    solution(input);
    process.exit();
});