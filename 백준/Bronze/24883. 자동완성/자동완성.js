function solution(input) {
    const LOWER_CASE_STRING = input.toLowerCase();

    console.log(LOWER_CASE_STRING === 'n' ? 'Naver D2' : 'Naver Whale');
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