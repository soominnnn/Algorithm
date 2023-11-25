function solution(n, k) {
    const ARRAY = [];
    for(let i = k; i<= n; i+=k) {
        ARRAY.push(i);
    }
    return ARRAY;
}