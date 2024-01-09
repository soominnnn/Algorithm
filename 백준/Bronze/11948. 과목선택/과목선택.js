function solution(input) {
    const SCIENCE_SCORE = input.slice(0, 4).sort((a, b) => b - a).splice(0, 3);
    const SCIENCE_SCORE_SUM = SCIENCE_SCORE.reduce((a, b) => Number(a) + Number(b));
    const HUMAN_SCORE = Math.max(...input.slice(4, 6));

    console.log(SCIENCE_SCORE_SUM + HUMAN_SCORE);
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