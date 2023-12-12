function solution(input) {
    const RESULT = Number(input[0]) + Number(input[2]) < input[1] || input[1] == 0 ? 'hasu' : 'gosu';
    
    console.log(RESULT);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input;
let list = [];

rl.on("line", function (line) {
    input = line;
    rl.close();
}).on("close", function () {
    list = input.split('/');

    solution(list);
    process.exit();
});