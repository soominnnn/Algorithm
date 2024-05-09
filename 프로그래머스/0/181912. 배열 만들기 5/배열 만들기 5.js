function solution(intStrs, k, s, l) {
    const array = intStrs.map(el => Number(el.slice(s, s + l)));
    const result = array.filter(el => el > k);
    
    return result;
}