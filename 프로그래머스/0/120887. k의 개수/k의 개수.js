function solution(i, j, k) {
    let result = 0;
    
    for(let index = i; index <= j; index++) {
        const numberArray = String(index).split('');
        result += numberArray.filter(el => Number(el) === k).length;
    }
    
    return result;
}