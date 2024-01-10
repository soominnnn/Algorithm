function solution(input) {
    const N = input[0][0];
    input.shift();
    let result = '';
    const deque = [];

    for(let i = 0; i < N; i++) {
        switch(input[i][0]) {
            case 'push_front': {
                deque.unshift(input[i][1]);
                break;
            }
            case 'push_back': {
                deque.push(input[i][1]);
                break;
            }
            case 'pop_front': {
                deque.length !== 0 ? result += deque.shift() + '\n' : result += '-1\n';
                break;
            }
            case 'pop_back': {
                deque.length !== 0 ? result += deque.pop() + '\n' : result += '-1\n';
                break;
            }
            case 'size': {
                result += deque.length + '\n';
                break;
            }
            case 'empty': {
                deque.length !== 0 ? result += '0\n' : result += '1\n';
                break;
            }
            case 'front': {
                deque.length !== 0 ? result += deque[0] + '\n' : result += '-1\n';
                break;
            }
            case 'back': {
                deque.length !== 0 ? result += deque[deque.length - 1] + '\n' : result += '-1\n';
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