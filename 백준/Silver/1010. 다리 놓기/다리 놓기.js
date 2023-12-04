function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

function combination(n, r) {
    return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
}

function solution(input) {
    const TEST_COUNT = input[0];
    let result = '';
    
    for (let i = 1; i <= TEST_COUNT; i++) {
        const N_NUMBER = input[i][1];
        const R_NUMBER = input[i][0];
        result += N_NUMBER === R_NUMBER ? '1\n' : parseInt(combination(N_NUMBER, R_NUMBER)) + '\n';
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
    input.push(line);
}).on("close", function () {
    input.forEach((val) => {
        list.push(val.split(' ').map((el) => parseInt(el)));
    });
    solution(list);
    process.exit();
});