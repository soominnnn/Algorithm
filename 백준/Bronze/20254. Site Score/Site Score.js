function solution(input) {
    const RESULT = 56 * input[0] + 24 * input[1] + 14 * input[2] + 6 * input[3];
    console.log(RESULT);   
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input;
let list = [];

rl.on("line", function (line) {
    input = line;
    rl.close();
}).on("close", function () {
    list = input.split(' ').map((el) => Number(el));

    solution(list);
    process.exit();
});