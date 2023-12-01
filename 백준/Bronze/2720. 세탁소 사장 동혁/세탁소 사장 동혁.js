function solution(input) {
    const MONEY = [0.25, 0.10, 0.05, 0.01];
    let result = '';
    let remain = 0;

    for(let i = 1; i < input.length; i++) {
        remain = input[i] * 0.01;
        for(let j = 0; j < MONEY.length; j++) {
            result += Math.floor((remain) / MONEY[j]) + ' ';
            remain = (remain % MONEY[j]).toFixed(2);
        }
        result += '\n';
    }
    console.log(result);
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