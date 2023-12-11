function solution(input) {
    const RESULT = input.map((dice) => {
        const [a, b, c] = dice;

        if (a === b && b === c) {
            return 10000 + (a * 1000);
        }
        else if(b === c || a === c){
            return 1000 + (c * 100);            
        }
        else if(a === b) {
            return 1000 + (a * 100);
        }
        return Math.max(a, b, c) * 100;
    })

    console.log(Math.max(...RESULT));
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