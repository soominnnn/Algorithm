function solution(input) {
    const RESULT = input[0] === 1 && input[1] === 1 ? 0 : input[0] * input[1] - 1;
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