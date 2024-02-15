function solution(a, b, flag) {
    let result = '';

    if(flag === true) {
        result = a + b;
    } else {
        result = a - b;
    }
    
    return result;   
}