function solution(input) {
    const RESULT = input.map(el => el.length >= 6 && el.length <= 9 ? 'yes' : 'no').join('\n');

    console.log(RESULT);
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