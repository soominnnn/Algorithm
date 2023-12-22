function solution(input) {
    const MINUTE = Math.floor(input / 60);
    const SECOND = input % 60;
    
    console.log(`${MINUTE}\n${SECOND}`);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];
let plusInput = 0;

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    plusInput = input.reduce((a,b) => Number(a) + Number(b), 0);
    solution(plusInput);
    process.exit();
});