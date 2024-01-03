function solution(a, b) {
    const FIRST_RESULT = Number(String(a) + String(b));
    const TWICE_RESULT = 2 * a * b;
    const RESULT = FIRST_RESULT >= TWICE_RESULT ? FIRST_RESULT : TWICE_RESULT;
    
    return RESULT;
}