function solution(input) {
    const SNACK_AMOUNT = input[0] * input[1];
    const BALANCE = input[2];
    const RESULT = BALANCE - SNACK_AMOUNT >= 0 ? 0 : -(BALANCE - SNACK_AMOUNT);

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