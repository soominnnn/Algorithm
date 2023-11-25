function solution(a, b) {
    const NUMBER_ONE = String(a) + String(b);
    const NUMBER_TWO = String(b) + String(a);
    const RESULT = NUMBER_ONE > NUMBER_TWO ? NUMBER_ONE : NUMBER_TWO;
    return Number(RESULT);
}