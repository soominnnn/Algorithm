function solution(numer1, denom1, numer2, denom2) {
    const a = numer1 * denom2 + numer2 * denom1;
    const b = denom1 * denom2;
    let maxNum = 1;
    
    for (let i = 1; i <= a; i++) {
        if(a % i === 0 && b % i === 0) {
            maxNum = i;
        }
    }
    
    return [a / maxNum, b / maxNum];
}