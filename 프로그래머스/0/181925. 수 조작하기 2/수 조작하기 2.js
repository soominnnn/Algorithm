function solution(numLog) {
    const LOG_ARRAY = numLog;
    const resultArray = [];
    
    for(let i = 0; i < LOG_ARRAY.length - 1; i++) {
        let result = '';
        if(LOG_ARRAY[i + 1] === LOG_ARRAY[i] + 1) {
            result = 'w';
        }
        else if(LOG_ARRAY[i + 1] === LOG_ARRAY[i] - 1) {
            result = 's';
        }
        else if(LOG_ARRAY[i + 1] === LOG_ARRAY[i] + 10) {
            result = 'd';
        }
        else if(LOG_ARRAY[i + 1] === LOG_ARRAY[i] - 10) {
            result = 'a';
        }
        resultArray.push(result);
    }
    
    return resultArray.join('');
}