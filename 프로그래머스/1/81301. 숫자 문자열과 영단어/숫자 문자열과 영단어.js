function solution(s) {
    let result = s;
    const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five',
                     'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i < NUMBERS.length; i++) {
        if(result.includes(NUMBERS[i])) {
            result = result.replaceAll(NUMBERS[i], i);
        }
    }
    
    return Number(result);
}