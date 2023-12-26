function solution(input) {
    let result = '';
    const HIS_CARD_ARRAY = new Set(input[1])
    const FIND_CARD_ARRAY = input[3];

    for(let i = 0; i < input[2]; i++) {
        result += Number(HIS_CARD_ARRAY.has(FIND_CARD_ARRAY[i])) + ' ';
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
       list.push(val.split(' ').map((el) => parseInt(el)));
    });
    solution(list);
    process.exit();
});