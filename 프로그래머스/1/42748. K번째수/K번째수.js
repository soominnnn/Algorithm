function solution(array, commands) {
    const resultArray = [];
    
    for(let i = 0; i < commands.length; i++) {
        const sliceArray = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a- b);
        resultArray.push(sliceArray[commands[i][2] - 1]);
    }
    
    return resultArray;
}