function solution(input) {
    const AVERAGE = Math.round(input.reduce((a,b) => Number(a) + Number(b)) / input.length);
    const MIDDLE = input.sort((a,b) => a - b)[Math.floor(input.length / 2)];
    console.log(`${AVERAGE}\n${MIDDLE}`);
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