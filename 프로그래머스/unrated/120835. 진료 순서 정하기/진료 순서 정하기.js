function solution(emergency) {
    const EMERGENCY_COUNT = emergency.map(el => el).sort((a,b) => b - a);
    let resultArray = [];
    
    for(let i = 0; i < emergency.length; i++) {
        const INDEX_NUMBER = emergency.indexOf(EMERGENCY_COUNT[i]);
        resultArray[INDEX_NUMBER] = i + 1;
    }
    
    return resultArray;
}