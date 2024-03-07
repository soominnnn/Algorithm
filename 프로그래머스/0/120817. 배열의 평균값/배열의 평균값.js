function solution(numbers) {
    const sum = numbers.reduce((a, b) => a + b);
    const result = sum / numbers.length;
    
    return result;
}