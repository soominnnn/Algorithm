function solution(input) {
    let result = '';

    for(let i = 1; i < input * 2; i++) {
        if(i < input) {
            result += ' '.repeat(input - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        else if(i === input) {
            result += '*'.repeat(i * 2 - 1) + '\n';
        }
        else {
            result += ' '.repeat(i - input) + '*'.repeat(2 * (i - 2 * (i - input)) - 1) + '\n';
        }
    }

    console.log(result);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line; 
    rl.close();
}).on("close", function () {
    solution(input);
    process.exit();
});