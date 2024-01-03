function solution(my_string, alp) {
    const RESULT = my_string.split('').map(el => {
        if(el === alp) {
            return el.toUpperCase();
        }
        return el;
    });
    
    return RESULT.join('');
}