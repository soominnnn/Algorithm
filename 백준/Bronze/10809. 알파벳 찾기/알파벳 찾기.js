function solution(input) {
    const result = [];
    for(let i = 97; i <= 122; i++) {
        result.push(input.indexOf(String.fromCharCode(i)));
    }
    console.log(result.join(' '));
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