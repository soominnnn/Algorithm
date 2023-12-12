function solution(input) {
    const INVITE_PEOPLE_COUNT = input[0][0] * input[0][1];
    const ARRAY = input[1].map(el => {
        if(el === INVITE_PEOPLE_COUNT) {
            return 0;
        } else {
            return el - INVITE_PEOPLE_COUNT;
        }
    })
    
    console.log(ARRAY.join(' '));
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