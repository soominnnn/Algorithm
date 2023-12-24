function solution(input) {
    const X = input[2] - input[0] > input[0] ? input[0] : input[2] - input[0];
    const Y = input[3] - input[1] > input[1] ? input[1] : input[3] - input[1];
    const RESULT = X > Y ? Y : X;
    
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