function solution(input) {
    const resultArray = [];
    let sum = 0;

    for(let i = 0; i < input.length; i++) {
        sum += input[i][1] - input[i][0]; 
        resultArray.push(sum);
    }
    
    console.log(Math.max(...resultArray));
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