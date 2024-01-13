function solution(input) {
  let result = 0;

  for(let i = 1; i <= input; i++) {
    if(i % 5 === 0) result += 1;
    if(i % 25 === 0) result += 1;
    if(i % 125 === 0) result += 1;
  }

  console.log(result);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
        output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line; 
    input = parseInt(line);
    rl.close();
}).on("close", function () {

    solution(input);
    process.exit();
});