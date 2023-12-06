function solution(input) {
    const REVERSE_INPUT = input.split('').reverse().join('');
    console.log(REVERSE_INPUT === input ? 1 : 0);
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