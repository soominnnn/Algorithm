function solution(input) {    
    const RESULT_ARRAY = input.map(el => {
        const NON_ADV = el[0];
        const ADV = el[1];
        const ADV_AMOUNT = el[2];

        if (NON_ADV === (ADV - ADV_AMOUNT)) {
            return 'does not matter';
        }
        if (NON_ADV > (ADV - ADV_AMOUNT)) {
            return 'do not advertise';
        }
        if (NON_ADV < (ADV - ADV_AMOUNT)) {
            return 'advertise';
        }
    });

    console.log(RESULT_ARRAY.join('\n'));
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
    list.shift();

    solution(list);
    process.exit();
});