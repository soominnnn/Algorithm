function solution(input) {
    const BURGER = input.filter((_,index) => index < 3).sort((a,b) => a-b);
    const BEBARAGE = input.filter((_,index) => index >= 3).sort((a,b) => a-b);
    const MENU_AMOUNT = (Number(BURGER[0]) + Number(BEBARAGE[0])) - 50;
    console.log(MENU_AMOUNT);
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