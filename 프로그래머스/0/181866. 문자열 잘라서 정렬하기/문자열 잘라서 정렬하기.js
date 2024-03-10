function solution(myString) {
    const result = myString.split('x').filter(el => el !== '').sort();
    
    return result;
}