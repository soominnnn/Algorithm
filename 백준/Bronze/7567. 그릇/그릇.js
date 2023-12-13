function solution(input) {
    let sum = 10;

    for(let i = 1; i < input.length; i++) {
        sum += input[i] === input[i - 1] ? 5 : 10;
    }

    console.log(sum);
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

    solution(input.split(''));
    process.exit();
});