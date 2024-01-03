function solution(n) {
    const ARRAY = [];
    
    for(let i = 1; i <= n; i++) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                ARRAY.push(i); 
            }
        }
    }
    return [...new Set(ARRAY)].length;
}