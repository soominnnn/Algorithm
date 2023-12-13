function solution(input) {
    const RESULT = input.reduce((a,b) => Number(a) + Number(b)) - (input.length - 1);

    console.log(RESULT);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    input.shift();

    solution(input);
    process.exit();
});