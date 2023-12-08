function solution(input) {
    let result = '';
    
    input.sort((a,b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    }).forEach(el => {
      result += `${el[0]} ${el[1]}\n`;  
    })

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
    list.shift();
    solution(list);
    process.exit();
});