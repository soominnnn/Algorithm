function solution(input) {
    const RESULT = input.map(el => {
        const array = el.split(',');
        return Number(array[0]) + Number(array[1]);
    }).join('\n');

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