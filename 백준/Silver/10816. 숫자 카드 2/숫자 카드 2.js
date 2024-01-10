function solution(input) {
    const HAVING_CARD = input[1];
    const FIND_CARD = input[3];
    const RESULT_MAP = new Map();

    HAVING_CARD.forEach(el => {
        RESULT_MAP.set(el, (RESULT_MAP.get(el) || 0) + 1);
    });

    const RESULT_ARRAY = FIND_CARD.map(card => RESULT_MAP.get(card) || 0);

    console.log(RESULT_ARRAY.join(' '));
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