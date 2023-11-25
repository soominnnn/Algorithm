function solution(input) {
  let result = '';
  for(let i = 1; i <= input[0]; i++) {
    const form = `${input[i][0]} + ${input[i][1]} = ${input[i][0] + input[i][1]}`;
    result += `Case #${i}: ${form}\n`;
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
    solution(list);
    process.exit();
});