function solution(input) {
    let result = '';
    for(let i = input; i > 0; i--) {
        if(i === input) {
            result += '*'.repeat(i) + '\n';
        } else {
            result += ' '.repeat(input - i) + '*'.repeat(i) + '\n';
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