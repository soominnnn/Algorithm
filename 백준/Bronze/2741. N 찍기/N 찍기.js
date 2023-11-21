let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const REPEAT_NUMBER = input[0];
let answer = '';

for (let i = 1; i <= REPEAT_NUMBER; i++) {
    answer += i + '\n';
}

console.log(answer);