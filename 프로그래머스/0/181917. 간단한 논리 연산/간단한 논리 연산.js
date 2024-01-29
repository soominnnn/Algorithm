function solution(x1, x2, x3, x4) {
    const frontBool = x1 || x2;
    const backBool = x3 || x4;
    const RESULT = frontBool && backBool;
    
    return RESULT;
}