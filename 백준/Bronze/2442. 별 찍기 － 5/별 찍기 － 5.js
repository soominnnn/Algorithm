function solution(input) {
    let result = '';

    for(let i = 1; i <= input; i++) {
        result += ' '.repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n';
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
    input = parseInt(line);
    rl.close();
}).on("close", function () {

    solution(input);
    process.exit();
});