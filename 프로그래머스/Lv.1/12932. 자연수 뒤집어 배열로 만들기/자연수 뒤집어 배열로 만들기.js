function solution(n) {
    const resultArray = String(n).split('').map(el => Number(el)).reverse();
    
    return resultArray;
}