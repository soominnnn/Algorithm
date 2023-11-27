function solution(input) {
    console.log(String(input[0] + input[1]).replace('n')); 
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
    list = input.split(' ').map((el) => BigInt(el));

    solution(list);
    process.exit();
});