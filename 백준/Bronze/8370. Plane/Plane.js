function solution(input) {
    const BUSINESS = input[0] * input[1];
    const ECONOMIC = input[2] * input[3];
    const ALL_SEAT = BUSINESS + ECONOMIC;

    console.log(ALL_SEAT);
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