function solution(input) {
  const SUB_COUNT = input[0];
  const MAX_SCORE = Math.max(...input[1]);
  const SCORE = input[1].map(el => el / MAX_SCORE * 100);
  const RESULT = SCORE.reduce((a,b) => a + b) / SUB_COUNT;
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