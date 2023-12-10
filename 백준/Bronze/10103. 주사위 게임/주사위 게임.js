function solution(input) {
    const TEST_COUNT = input[0];
    let score = [100, 100];
    for(let i = 1; i <= TEST_COUNT; i++) {
        if(input[i][0] > input[i][1]) {
            score[1] -= input[i][0];
        }
        else if(input[i][0] < input[i][1]) {
            score[0] -= input[i][1];
        }
    }
    console.log(`${score[0]}\n${score[1]}`);
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