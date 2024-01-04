function solution(binomial) {
    const ARRAY = binomial.split(' ');
    
    switch(ARRAY[1]) {
        case '+': {
            return Number(ARRAY[0]) + Number(ARRAY[2]);
        }
        case '-': {
            return Number(ARRAY[0]) - Number(ARRAY[2]);
        }
        case '*': {
            return Number(ARRAY[0]) * Number(ARRAY[2]);
        }
    }
}