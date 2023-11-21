let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const N = input[0];
const M = input[1];

const RESULT = N-M;
if (RESULT > 0) {
  console.log(RESULT);
}
if (RESULT < 0 ) {
  console.log(-RESULT);
}