function solution(input) {
    const SPLIT_ARRAY = String(input[1]).split('');
    const A_COUNT = SPLIT_ARRAY.filter(el => el == 'A').length;
    const B_COUNT = SPLIT_ARRAY.filter(el => el == 'B').length;
    let result = '';

    if(A_COUNT === B_COUNT) {
        result = 'Tie';
    }
    else {
        result = A_COUNT > B_COUNT ? 'A' : 'B';
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
       list.push(val.split(' ').map(el => el));
    });
    solution(list);
    process.exit();
});