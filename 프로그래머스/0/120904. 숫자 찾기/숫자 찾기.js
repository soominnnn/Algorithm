function solution(num, k) {
    let result = 0;
    const numberArray = String(num).split('').map(el => Number(el));
    
    result = numberArray.indexOf(k);
    
    return result === -1 ? -1 : result + 1;
}