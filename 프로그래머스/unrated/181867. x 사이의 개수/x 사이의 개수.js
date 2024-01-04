function solution(myString) {
    const SPLIT_STRING = myString.split('');
    const resultArray = [];
    let count = 0;
    
    for(let i = 0; i < SPLIT_STRING.length; i++) {
        if(SPLIT_STRING[i] === 'x') {
            resultArray.push(count);
            count = 0;
        }
        else if(SPLIT_STRING[i] !== 'x') {
            count += 1;
        }
        
        if(i === SPLIT_STRING.length - 1) {
                resultArray.push(count);
            }
    }
    
    return resultArray;
}