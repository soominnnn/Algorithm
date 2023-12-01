function solution(input) {
    let result = Array.from(Array(input[0][0]), (_, i) => i + 1);
    let tmp;

    for(let i = 1; i <= input[0][1]; i++) {
        tmp = result[input[i][1] - 1];
        result[input[i][1] - 1] = result[input[i][0] - 1];
        result[input[i][0] - 1] = tmp;
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