function solution(input) {
    console.log(input.join(' '));   
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
    list = input.split(' ').map((el) => Number(el)).sort((a,b) => a - b);

    solution(list);
    process.exit();
});