function solution(input) {
    let result = '';
    for(let i = 1; i <= input[0]; i++) {
        const STRING_TO_ARRAY = input[i][1].split('');
        const ARRAY = STRING_TO_ARRAY.map(el => el.repeat(input[i][0]));
        result += ARRAY.join('') + '\n';
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
       list.push(val.split(' ').map((el) => (el)));
    });
    solution(list);
    process.exit();
});