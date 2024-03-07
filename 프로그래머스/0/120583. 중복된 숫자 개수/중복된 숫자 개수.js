function solution(array, n) {
    const result = array.filter(el => el === n).length;
    
    return result;
}