function solution(q, r, code) {
    const array = code.split('').filter((_, index) => index % q === r);
    const result = array.join('');
    
    return result;
}