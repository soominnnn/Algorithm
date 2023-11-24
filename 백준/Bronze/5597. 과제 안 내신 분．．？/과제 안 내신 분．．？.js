function solution(input) {
  const answerArray = [];
  let answer = '';
  const array = input.flat();
  for(let i = 1; i <= 30; i++) {
    if(array.indexOf(i) === -1) {
      answerArray.push(i);
    }
  }
  answerArray.sort((a,b) => a-b);
  for(let i = 0; i < answerArray.length; i++) {
    answer += answerArray[i] + '\n';
  }
  console.log(answer);
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