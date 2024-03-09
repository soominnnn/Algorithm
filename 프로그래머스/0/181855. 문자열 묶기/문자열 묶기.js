function solution(strArr) {
    const strLengthArray = strArr.map(el => el.length);
    const maxNumber = Math.max(...strLengthArray);
    const strLengthCountArray = [];
    let result = 0;
    
    for(let i = 1; i <= maxNumber; i++) {
        const strCount = strLengthArray.filter(el => el === i).length;
        
        strLengthCountArray.push(strCount);
    }
    
    result = Math.max(...strLengthCountArray);
    return result;
}