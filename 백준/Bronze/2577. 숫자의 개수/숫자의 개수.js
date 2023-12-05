function solution(input) {
    const MULTIPLE = String(input[0] * input[1] * input[2]);
    const ARRAY = MULTIPLE.split('');
    for(let i = 0; i <= 9; i++) {
        console.log(ARRAY.filter(el => el === String(i)).length);
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