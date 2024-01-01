function solution(input) {
  const MONTH = input[0];
  const DATE = input[1];
  const SPECIAL_MONTH = 2;
  const SPECIAL_DATE = 18;

  if (MONTH < SPECIAL_MONTH) {
    console.log('Before');
  } else if (MONTH > SPECIAL_MONTH) {
    console.log('After');
  } else {
    if (DATE < SPECIAL_DATE) {
      console.log('Before');
    } else if (DATE > SPECIAL_DATE) {
      console.log('After');
    } else {
      console.log('Special');
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];

rl.on("line", function (line) {
   input.push(Number(line))
}).on("close", function () {
    solution(input);
    process.exit();
});