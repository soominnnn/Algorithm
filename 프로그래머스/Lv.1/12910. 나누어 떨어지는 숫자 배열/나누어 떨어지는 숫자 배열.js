function solution(arr, divisor) {
    const FILTERED_ARRAY = arr.filter(el => el % divisor === 0).sort((a, b) => a - b);
    
    return FILTERED_ARRAY.length !== 0 ? FILTERED_ARRAY : [-1];
}