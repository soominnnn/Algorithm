function solution(input) {
    const DIAL = input.split('');
    let sum = 0;
    const PHONE_NUMBER = {
        2: 'ABC',
        3: 'DEF',
        4: 'GHI',
        5: 'JKL',
        6: 'MNO',
        7: 'PQRS',
        8: 'TUV',
        9: 'WXYZ'
    }
    for(let i = 0; i < DIAL.length; i++) {
        for(let j = 2; j <= 9; j++) {
            if(PHONE_NUMBER[j].includes(DIAL[i])) {
                sum += j + 1;
                break;
            }
        }
    }
    console.log(sum);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
        output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line; 
    rl.close();
}).on("close", function () {

    solution(input);
    process.exit();
});