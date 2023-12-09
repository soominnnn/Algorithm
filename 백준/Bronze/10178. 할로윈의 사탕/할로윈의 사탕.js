function solution(input) {
    let result = '';

    for(let i = 0; i < input.length; i++) {
        const BROTHER_CANDY_COUNT = Math.floor(input[i][0] / input[i][1]);
        const DADDY_CANDY_COUNT = input[i][0] % input[i][1];
        
        result += `You get ${BROTHER_CANDY_COUNT} piece(s) and your dad gets ${DADDY_CANDY_COUNT} piece(s).\n`;
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
    list.shift();
    solution(list);
    process.exit();
});