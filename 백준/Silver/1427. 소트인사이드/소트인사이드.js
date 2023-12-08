function solution(input) {
    console.log(input.sort((a,b) => b - a).join(''));
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
        output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line.split(''); 
    rl.close();
}).on("close", function () {

    solution(input);
    process.exit();
});