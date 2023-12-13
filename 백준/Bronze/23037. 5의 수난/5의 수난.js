function solution(input) {
    const RESULT = input.reduce((a, b) => {
        return a + Math.pow(b, 5);
    }, 0);

    console.log(RESULT)
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
        output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line; 
    input = line.split('').map(el => Number(el));
    rl.close();
}).on("close", function () {

    solution(input);
    process.exit();
});