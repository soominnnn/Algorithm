function solution(input) {
    const string = input[0].toString();
    const index = Number(input[1]);
    console.log(string[index-1]);   
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
       list.push(val.split(' '));
    });
    solution(list);
    process.exit();
});