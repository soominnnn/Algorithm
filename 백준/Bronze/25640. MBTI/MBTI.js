function solution(input) {
    const FIND_MBTI = input[0];
    const ARRAY = input.slice(2, input.length).flat();
    const RESULT = ARRAY.filter(el => el == FIND_MBTI).length;

    console.log(RESULT);
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