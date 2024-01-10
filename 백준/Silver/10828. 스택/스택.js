function solution(input) {
    const N = Number(input[0]);
    input.shift();
    const stack = [];
    let result = '';
    
    for(let i = 0; i < N; i++) {
        switch(input[i][0]) {
            case 'push': {
                stack.push(input[i][1]);
                break;
            }
            case 'pop': {
                if(stack.length === 0) {
                    result += '-1\n';
                } else {
                    result += stack.pop() + '\n';
                }
                break;
            }
            case 'size': {
                result += stack.length + '\n';
                break;
            }
            case 'empty': {
                if(stack.length === 0) {
                    result += '1\n';
                } else {
                    result += '0\n';
                }
                break;
            }
            case 'top': {
                if(stack.length === 0) {
                    result += '-1\n';
                } else {
                    result += stack[stack.length - 1] + '\n';
                }
                break;
            }
        }
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
        list.push(val.split(' ').map((el) => (el)));
    });
    solution(list);
    process.exit();
});