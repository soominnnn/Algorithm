function solution(s) {
    const ARRAY = s.split(' ');
    let sum = 0;
    let tmp = 0;
    
    for(let i = 0; i < ARRAY.length; i++) {
        if(ARRAY[i] !== 'Z') {
            sum += Number(ARRAY[i]);
            tmp = Number(ARRAY[i]);
        } else {
            sum -= tmp;
        }
    }
    
    return sum;
}