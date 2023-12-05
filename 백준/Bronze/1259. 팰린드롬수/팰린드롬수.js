function solution(input) {
    for(let i = 0; i < input.length - 1; i++) {
        const ARRAY = String(input[i]).split('').reverse().join('');
        console.log(ARRAY == input[i] ? 'yes' : 'no');
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
       list.push(val.split(' ').map(el => String(el)));
    });
    solution(list);
    process.exit();
});