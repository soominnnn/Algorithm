function solution(input) {
    const ODD_ARRAY = input.filter(el => el % 2 !== 0);
    if (ODD_ARRAY.length !== 0) {
        const SUM = ODD_ARRAY.reduce((a,b) => Number(a)+ Number(b));
        const MIN_NUM = Math.min(...ODD_ARRAY);

        console.log(`${SUM}\n${MIN_NUM}`);
    } else {
        console.log('-1');
    }
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
       list.push(val.split(' ').map((el) => Number(el)));
    });
    solution(list);
    process.exit();
});