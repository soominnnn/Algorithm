function solution(input) {
    const ARRAY = input.map(el => el).sort((a,b) => b - a);
    const INDEX = input.indexOf(ARRAY[0]) + 1;
    console.log(`${ARRAY[0]}\n${INDEX}`);
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