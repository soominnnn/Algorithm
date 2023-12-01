function solution(input) {
    let result = new Array(input[0][0]).fill(0);
    for(let i = 1; i <= input[0][1]; i++) {
        result = result.map((el, index) => index >= input[i][0] - 1 && index <= input[i][1] - 1 ? input[i][2] : el );
    }
    console.log(result.join(' '));
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