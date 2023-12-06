function solution(input) {
    const CHESS = [1, 1, 2, 2, 2, 8];
    const ARRAY = input;
    const resultArray = [];
    for(let i = 0; i < ARRAY.length; i++) {
        resultArray.push(CHESS[i] - ARRAY[i]);
    }
    console.log(resultArray.join(' '));
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