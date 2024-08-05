function solution(arr, flag) {
    const resultArray = [];
    
    for(let i = 0; i <= arr.length - 1; i++) {
        if(flag[i] === true) {
            for(let j = 1; j <= arr[i] * 2; j++) {
                resultArray.push(arr[i]);
            }
        }
        if(flag[i] === false) {
            for(let j = 1; j <= arr[i]; j++) {
                resultArray.pop();
            }
        }
    }
    
    return resultArray;
}