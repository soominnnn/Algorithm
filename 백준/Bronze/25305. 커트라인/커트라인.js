function solution(input) {
    const CUT_LINE_INDEX = input[0][1] - 1;
    const SORT_ARRAY = input[1].sort((a,b) => b - a);

    console.log(SORT_ARRAY[CUT_LINE_INDEX]);
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