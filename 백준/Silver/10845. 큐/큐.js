function solution(input) {
    const que = [];
    let result = '';
    const N = input.shift();

    for(let i = 0; i < N; i++) {
        if(input[i].split(' ').length !== 1 ) {
            const array = input[i].split(' ');
            que.push(array[1]);
        } else {
            switch(input[i]) {
                case 'pop': {
                    if(que.length === 0) {
                        result += '-1\n';
                    } else{
                        result += que.shift() + '\n';
                    }
                    break;
                }
                case 'size': {
                    result += que.length + '\n';
                    break;
                }
                case 'empty': {
                    if(que.length === 0) {
                        result += '1\n'; 
                    } else{
                        result += '0\n';
                    }
                    break;
                }
                case 'front': {
                    if(que.length === 0) {
                        result += '-1\n';
                    } else {
                        result += que[0] + '\n';
                    }
                    break;
                }
                case 'back': {
                    if(que.length === 0) {
                        result += '-1\n';
                    } else {
                        result += que[que.length - 1] + '\n';
                    }
                    break;
                }
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

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    solution(input);
    process.exit();
});