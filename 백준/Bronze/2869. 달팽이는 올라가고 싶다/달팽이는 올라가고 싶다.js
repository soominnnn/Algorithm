function solution(input) {
    const UP_STAT = input[0];
    const DOWN_STAT = input[1];
    const HEIGHT = input[2];
    console.log(Math.ceil((HEIGHT - DOWN_STAT) / (UP_STAT - DOWN_STAT)));
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input;
let list = [];

rl.on("line", function (line) {
    input = line;
    rl.close();
}).on("close", function () {
    list = input.split(' ').map((el) => Number(el));

    solution(list);
    process.exit();
});