function solution(a, b) {
    const firstResult = Number(String(a) + String(b));
    const twiceResult = 2 * a * b;
    const result = firstResult >= twiceResult ? firstResult : twiceResult;
    
    return result;
}