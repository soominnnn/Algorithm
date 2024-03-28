function solution(number) {
    const sum = number.split('').reduce((a, b) => Number(a) + Number(b));
    const result = sum % 9;
    
    return result;
}