function solution(names) {
    const RESULT = names.filter((_,index) => index % 5 == 0);
    return RESULT;
}