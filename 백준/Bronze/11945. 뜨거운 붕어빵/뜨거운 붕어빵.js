function solution(input) {
    for(let i = 0; i < input.length; i++) {
        const REVERSE_BREAD = String(input[i]).split('').reverse().join('');
        console.log(REVERSE_BREAD);
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
       list.push(val.split(' ').map((el) => (el)));
    });
    list.shift();
    solution(list);
    process.exit();
});