function solution(input) {
    const VACATION = input[0];
    const MATH_PROBLEM = input[2] % input[4] === 0 ? Math.floor(input[2] / input[4]) : Math.floor(input[2] / input[4]) + 1;
    const LANGUAGE_PROBLEM = input[1] % input[3] === 0 ? Math.floor(input[1] / input[3]) : Math.floor(input[1] / input[3]) + 1;
    if(MATH_PROBLEM >= LANGUAGE_PROBLEM) {
        console.log(VACATION - MATH_PROBLEM);
    }
    else if(MATH_PROBLEM < LANGUAGE_PROBLEM) {
        console.log(VACATION - LANGUAGE_PROBLEM);
    }
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
    solution(list);
    process.exit();
});