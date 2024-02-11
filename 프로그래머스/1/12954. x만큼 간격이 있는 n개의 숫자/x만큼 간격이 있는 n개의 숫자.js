function solution(x, n) {
    const resultArray = [];
    let count = 1;
    
    while(count <= n) {
        resultArray.push(x * count);
        count += 1;
    }
    
    return resultArray;
}