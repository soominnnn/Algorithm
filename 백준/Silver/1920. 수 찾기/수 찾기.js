function solution(input) {
    const TRY_COUNT = input[2];
    const SET_NUMBER = new Set(input[1]);
    let result = '';
    for(let i = 0; i < TRY_COUNT; i++) {
        result += SET_NUMBER.has(input[3][i]) === true ? '1\n' : '0\n';
    }
    console.log(result);
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