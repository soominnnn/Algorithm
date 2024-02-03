function solution(input) {
    let result = 0;

    for(let i = 0; i < input[0]; i++) {
        let count = 0;

        for(let j = 1; j <= input[1][i]; j++) {
            if(input[1][i] % j === 0) count += 1;
        }

        if(count === 2) result += 1;
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
    solution(list);
    process.exit();
});