function solution(input) {
    const ARRAY = [...new Set(input.flat())];
    const RESULT = ARRAY.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n');
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
       list.push(val.split(' ').map(el => el.toString()));
    });
    list.shift();
    solution(list);
    process.exit();
});