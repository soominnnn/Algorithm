function solution(input) {
    let sum = 0;
    for(let i = 1; i <= input; i++) {
        sum += i;
    }
    console.log(sum);
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