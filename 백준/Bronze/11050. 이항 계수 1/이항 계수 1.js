function factorial(number) {
    if(number === 0 || number === 1){
        return 1;
    }
    return number * factorial(number - 1);
}

function solution(input) {
    const N = factorial(input[0]);
    const R = factorial(input[1]);
    const N_R = factorial(input[0] - input[1]);
    const RESULT = (N / (R * N_R));
    console.log(RESULT);
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