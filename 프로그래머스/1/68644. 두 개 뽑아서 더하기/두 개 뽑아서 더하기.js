function solution(numbers) {
    const resultArray = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i !== j) {
                resultArray.push(numbers[i] + numbers[j]);    
            }
        }
    }
    
    const setResult = [...new Set(resultArray)].sort((a, b) => a - b);
    
    return setResult;
}