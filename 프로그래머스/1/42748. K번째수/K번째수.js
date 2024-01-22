function solution(array, commands) {
    const resultArray = [];
    
    for(let i = 0; i < commands.length; i++) {
        const START = commands[i][0] - 1;
        const END = commands[i][1];
        const sliceArray = array.slice(START, END).sort((a, b) => a - b);
        resultArray.push(sliceArray[commands[i][2] - 1]);
    }
    
    return resultArray;
}