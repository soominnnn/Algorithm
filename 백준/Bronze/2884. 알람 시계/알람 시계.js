function solution(input) {
    let hour = input[0];
    let minute = input[1] - 45;
    if(minute < 0) {
        if(hour === 0) {
            hour += 23;
        }
        else {
            hour -= 1;
        }
        minute = 60 + minute;
    }
    console.log(hour, minute);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input;
let list = [];

rl.on("line", function (line) {
    input = line;
    rl.close();
}).on("close", function () {
    list = input.split(' ').map((el) => Number(el));

    solution(list);
    process.exit();
});