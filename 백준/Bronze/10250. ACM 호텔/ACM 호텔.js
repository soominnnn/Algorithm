function solution(input) {
    const TRY_COUNT = input[0];

    for(let i = 1; i <= TRY_COUNT; i++) {
        const H  = input[i][0];
        const N = input[i][2];
        const FLOOR = N % H === 0 ? H : N % H;
        const ROOM = Math.ceil(N / H);
        const ROOM_NUMBER = ROOM >= 10 ? ROOM : '0' + ROOM;
        console.log(`${FLOOR}${ROOM_NUMBER}`);
    }
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