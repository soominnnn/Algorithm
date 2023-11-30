function solution(input) {
    let hour = input[0][0];
    const TIME = Number(input[1]);
    let minute = input[0][1] + TIME;

    if(minute > 59) {
        const REST = Math.floor(minute / 60);
        minute -= 60 * REST;

        if( hour + REST >= 24) {
            hour = hour + REST - 24;
        } else {
            hour += REST;
        }
    }
    console.log(hour, minute)
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