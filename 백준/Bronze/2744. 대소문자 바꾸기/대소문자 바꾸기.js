function solution(input) {
  let array = input.split('');
  array = array.map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase());
  console.log(array.join(''));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line; 
    rl.close();
}).on("close", function () {

    solution(input);
    process.exit();
});