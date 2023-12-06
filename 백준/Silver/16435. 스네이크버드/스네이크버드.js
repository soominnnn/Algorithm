function solution(input) {
    let birdLength = input[0][1];
    const TRY_COUNT = input[0][0];
    const H_ARRAY = input[1].sort((a,b) => a - b);
    for(let i = 0; i < TRY_COUNT; i++) {
        if(birdLength >= H_ARRAY[i]) {
            birdLength++;
        }
        else {
            break;
        }
    }
    console.log(birdLength);
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