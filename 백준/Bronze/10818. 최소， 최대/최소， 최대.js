function solution(input) {
    const FLAT_ARRAY = input[1].flat();
    const SORT_ARRAY = FLAT_ARRAY.sort((a,b) => a - b);
    console.log(SORT_ARRAY[0],SORT_ARRAY[SORT_ARRAY.length-1]); 
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