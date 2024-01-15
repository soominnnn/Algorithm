function solution(input) {
  let count = 0;

  while (true) {
    if (input % 5 === 0) {
      console.log(input / 5 + count);
      break;
    }
      
    if (0 > input) {
      console.log(-1);
      break;
    }
  
    count++;
    input -= 3;
  }
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