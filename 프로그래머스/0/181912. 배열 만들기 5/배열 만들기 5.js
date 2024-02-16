function solution(intStrs, k, s, l) {
    const resultArray = [];
    
    for(let i = 0; i < intStrs.length; i++) {
        const strToInt = Number(intStrs[i].slice(s, l + s));
        
        if (strToInt > k) resultArray.push(strToInt);
    }
    
    return resultArray;
}