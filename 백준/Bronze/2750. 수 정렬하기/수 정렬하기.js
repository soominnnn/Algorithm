function solution(input) {
    const ARRAY = input.splice(1, input.length);
    let result = '';

    ARRAY.sort((a,b) => a - b).forEach(el => {
        result += el + '\n';
    })
    
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