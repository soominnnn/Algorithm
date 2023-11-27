function solution(input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    console.log(sum);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    solution(input);
    process.exit();
});