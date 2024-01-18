function solution(x) {
    const DIGIT_ARRAY = String(x).split('');
    const SUM = DIGIT_ARRAY.reduce((a, b) => Number(a) + Number(b), 0);
    
    return x % SUM === 0;
}