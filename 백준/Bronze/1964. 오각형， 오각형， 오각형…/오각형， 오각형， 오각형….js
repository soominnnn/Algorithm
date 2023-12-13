function solution(input) {
    let init_number = 5;

    for(let i = 1; i < input; i++) {
        init_number += 7 + (3 * (i - 1));
    }

    console.log(init_number % 45678);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
        output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line; 
    input = parseInt(line);
    rl.close();
}).on("close", function () {

    solution(input);
    process.exit();
});