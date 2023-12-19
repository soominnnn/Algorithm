function solution(input) {
  const TRYANGLE_SUM = input.reduce((a,b) => Number(a) + Number(b));
  const TRYANGLE_SET_LENGTH = [...new Set(input)].length;
  let answer = '';

  if(TRYANGLE_SUM === 180) {
    if(TRYANGLE_SET_LENGTH === 1) {
      answer = 'Equilateral';
    }
    else if(TRYANGLE_SET_LENGTH === 2) {
      answer = 'Isosceles';
    }
    else if(TRYANGLE_SET_LENGTH === 3) {
      answer = 'Scalene';
    }
  }
  else if(TRYANGLE_SUM !== 180) {
    answer = 'Error';
  }

  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    solution(input);
    process.exit();
});