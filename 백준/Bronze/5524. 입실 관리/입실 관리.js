function solution(input) {
    let result = '';
    for(let i = 1; i <= Number(input[0]); i++) {
        result += input[i].toLowerCase() + '\n';
    }
    console.log(result);
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