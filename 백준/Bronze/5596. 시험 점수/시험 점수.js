function solution(input) {
  const MINGUK_SCORE = input[0].reduce((a, b) => Number(a) + Number(b));
  const MANSAE_SCORE = input[1].reduce((a, b) => Number(a) + Number(b));
  const RESULT = MINGUK_SCORE >= MANSAE_SCORE ? MINGUK_SCORE : MANSAE_SCORE;

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