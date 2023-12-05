function solution(input) {
    const TRY_COUNT = input[0];
    const FLAT_ARRAY = input.flat();
    for(let i = 1; i <= TRY_COUNT; i++) {
        const ARRAY = FLAT_ARRAY[i];
        let count = 0;
        let sum = 0;
        for(let j = 0; j < ARRAY.length; j++) {
            ARRAY[j] === 'O' ? count++ : count = 0;
            sum += count;
        }
        console.log(sum);
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
       list.push(val.split(' ').map(el => el));
    });
    solution(list);
    process.exit();
});