function solution(input) {
    let sum = 0;
    const NUMBER_LIST = input[1].split('');
    for(let i = 0; i < Number(input[0]); i++) {
        sum += Number(NUMBER_LIST[i]);
    }
    console.log(sum);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    solution(input);
    process.exit();
});