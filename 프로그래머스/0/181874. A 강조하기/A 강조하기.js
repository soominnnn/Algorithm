function solution(myString) {
    const SPLIT_STRING = myString.toLowerCase().split('');
    const UPPER_A_STRING = SPLIT_STRING.map(el => {
        return el === 'a' ? el.toUpperCase() : el.toLowerCase()
    });
    
    return UPPER_A_STRING.join('');
}