function solution(input) {
    input.shift();
    const RESULT = input.sort((a,b) => b - a).join('\n');
    console.log(RESULT);  
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];
let list = [];

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    input.forEach((val) => {
       list.push(val.split(' ').map((el) => parseInt(el)));
    });
    solution(list.flat());
    process.exit();
});