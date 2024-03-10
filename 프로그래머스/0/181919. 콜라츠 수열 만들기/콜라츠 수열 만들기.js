function solution(n) {
    let result = [n,];
    let number = n;
    
    while(number !== 1) {
        if(number % 2 === 0) {
            number = number / 2;
            result.push(number);
        } else {
            number = 3 * number + 1;
            result.push(number);
        }
    }
    
    return result;
}