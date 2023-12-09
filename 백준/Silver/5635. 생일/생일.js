function solution(input) {
    const ARRAY = input.sort((a,b) => {
        if(a[3] === b[3]) {
            if(a[2] === b[2]) {
                return b[1] - a[1];
            }
            return b[2] - a[2];
        }
        return b[3] - a[3];
    })

    console.log(`${ARRAY[0][0]}\n${ARRAY[ARRAY.length - 1][0]}`);
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
    list.shift();
    solution(list);
    process.exit();
});