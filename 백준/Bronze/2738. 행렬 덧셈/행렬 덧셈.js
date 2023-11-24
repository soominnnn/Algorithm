function solution(input) {
  const column = input[0][0];
  const line = input[0][1];
  let array = Array.from(Array(column), () => new Array(line));

  for(let i = 1; i <= column; i++) {
    for(let j = 0; j < line; j++) {
      array[i-1][j] = (input[i][j] + input[i+column][j]); 
    }
  }
  let result = '';
  array = array.flat();
  for(let i = 0; i < array.length; i++) {
    if(i % 3 === 2 && i !== 0) {
      result += array[i] + '\n';
    }
    else {
      result += array[i] + ' ';
    }
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