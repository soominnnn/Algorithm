function solution(input) {
    const ONE = input[0];
    const TWO = input[1];
    const THREE = input[2];
    let money = 0;

    if(ONE === TWO) {
        if(ONE === THREE) {
            money = 10000 + ONE * 1000;
        } else {
            money = 1000 + ONE * 100;
        }
    } else {
        if(TWO === THREE) {
            money = 1000 + TWO * 100;
        } else {
            if(ONE === THREE) {
                money = 1000 + ONE * 100;
            } else {
                const ARRAY = input.sort((a,b) => b-a);
                money = ARRAY[0] * 100;
            }
        }
    }
    console.log(money);
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