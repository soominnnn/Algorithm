function solution(input) {
    const TEST_CASE = input.length - 1;
    for(let i = 0; i < TEST_CASE; i++) {
        const SORT_ARRAY = input[i].sort((a,b) => a - b);
        const RESULT = Math.pow(SORT_ARRAY[0], 2) + Math.pow(SORT_ARRAY[1], 2) === Math.pow(SORT_ARRAY[2], 2) ? 'right' : 'wrong';
        console.log(RESULT);
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