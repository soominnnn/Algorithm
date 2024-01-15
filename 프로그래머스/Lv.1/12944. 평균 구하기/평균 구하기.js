function solution(arr) {
    const SUM = arr.reduce((a, b) => Number(a) + Number(b));
    
    return SUM / arr.length;
}