function solution(input) {
    let result = '';

    for(let i = 0; i < input.length - 1; i++) {
        if(input[i][1] > 17 || input[i][2] >= 80) {
            result += input[i][0] + ' Senior' + '\n';
        } else {
            result += input[i][0] + ' Junior' + '\n';
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
        list.push(val.split(' ').map((el) => (el)));
    });
    solution(list);
    process.exit();
});