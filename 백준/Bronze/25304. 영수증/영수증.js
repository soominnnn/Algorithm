function solution(input) {
    const PURCHASE_AMOUNT = Number(input[0]);
    let sum = 0;
    for(let i = 1; i <= input[1]; i++) {
        sum += (input[i + 1][0] * input[i + 1][1]);
    }
    const RESULT = PURCHASE_AMOUNT === sum ? "Yes" : "No";
    console.log(RESULT);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];
let list = [];

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    input.forEach((val) => {
       list.push(val.split(' ').map((el) => Number(el)));
    });
    solution(list);
    process.exit();
});