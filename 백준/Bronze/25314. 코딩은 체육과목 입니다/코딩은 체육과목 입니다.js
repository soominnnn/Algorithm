function solution(input) {
    const REPEAT_NUMBER = input / 4;
    const REPEAT_STRING = 'long ';
    console.log(`${REPEAT_STRING.repeat(REPEAT_NUMBER)}int`);
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