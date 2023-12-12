function solution(input) {
    const ARRAY = input.map(el => el >= 40 ? el : 40);
    const RESULT = ARRAY.reduce((a,b) => Number(a) + Number(b)) / input.length;
    
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
    solution(list);
    process.exit();
});