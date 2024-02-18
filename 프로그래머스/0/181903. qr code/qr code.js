function solution(q, r, code) {
    const splitArray = code.split('');
    let result = '';
    
    for(let i = 0; i < splitArray.length; i++) {
        if(i % q === r) {
            result += splitArray[i];
        }
    }
    
    return result;
}