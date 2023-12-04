function solution(input) {
    const ARRAY = input.map(el => el).splice(1, input.length - 1).sort((a,b) => a - b);
    let result = '';
    for(let i = 0; i < input[0]; i++) {
        result += ARRAY[i] + '\n';
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
    solution(list.flat());
    process.exit();
});