function solution(a, b) {
    const numberOne = String(a) + String(b);
    const numberTwo = String(b) + String(a);
    const result = numberOne >= numberTwo ? numberOne : numberTwo;
    
    return +(result);
}