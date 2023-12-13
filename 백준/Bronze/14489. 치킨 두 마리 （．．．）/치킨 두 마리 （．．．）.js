function solution(input) {
    const A_BANK_BALANCE = input[0][0];
    const B_BANK_BALANCE = input[0][1];
    const CHICKEN = input[1] * 2;
    const BANK_BALANCE_SUM = Number(A_BANK_BALANCE) + Number(B_BANK_BALANCE);

    if(BANK_BALANCE_SUM >= CHICKEN) {
        return console.log(BANK_BALANCE_SUM - CHICKEN);
    }
    return console.log(BANK_BALANCE_SUM);
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
       list.push(val.split(' ').map((el) => parseInt(el)));
    });
    solution(list);
    process.exit();
});