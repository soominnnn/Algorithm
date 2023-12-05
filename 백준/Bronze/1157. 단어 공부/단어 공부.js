function solution(input) {
    const STRING_TO_ARRAY = input.toUpperCase().split('');
    const SET_ARRAY = [...new Set(STRING_TO_ARRAY)];
    let resultArray = new Array(SET_ARRAY.length).fill(0);
    let result = '';

    if(SET_ARRAY.length === 1) {
        result = SET_ARRAY[0];
    }
    else {
        for(let i = 0; i < STRING_TO_ARRAY.length; i++) {
            for(let j = 0; j < SET_ARRAY.length; j++) {
                const IS_IN_ARRAY = STRING_TO_ARRAY[i].includes(SET_ARRAY[j]);
                if(IS_IN_ARRAY) {
                    resultArray[j] += 1;
                    break; 
                }
            }
        }
        const MAX_NUMBER_INDEX = resultArray.indexOf(Math.max(...resultArray));
        result = resultArray.filter(el => el === Math.max(...resultArray)).length <= 1 ? SET_ARRAY[MAX_NUMBER_INDEX] : '?';
    }
    console.log(result);
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