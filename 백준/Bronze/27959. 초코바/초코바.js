function solution(input) {
    const MONEY = input[0];
    const PURCHASE_AMOUNT = input[1];
    const RESULT = MONEY * 100 >= PURCHASE_AMOUNT ? 'Yes' : 'No';
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