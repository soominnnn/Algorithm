function solution(input) {
  for(let i = 1; i <= input[0]; i++){
    const STRING = input[i].toString();
    console.log(`${STRING[0]}${STRING[STRING.length-1]}`);
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
       list.push(val.split(' '));
    });
    solution(list);
    process.exit();
});