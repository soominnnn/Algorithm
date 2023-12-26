function solution(input) {
    const result = input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);
    
    console.log(result.join('\n'));
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
    input.shift();
    solution(input);
    process.exit();
});