function solution(arr) {
    const resultArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            resultArray.push(arr[i][j] === arr[j][i]);
        }
    }
    
    return [...new Set(resultArray)].length === 1 ? 1 : 0;
}