function solution(n_str) {
    let result = n_str.split('');
    
    while(result[0] === '0') {
        result.shift();
    }
    
    return result.join('');
}