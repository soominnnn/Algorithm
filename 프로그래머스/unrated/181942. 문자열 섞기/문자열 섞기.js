function solution(str1, str2) {
    const STR1_ARRAY = str1.split('');
    const STR2_ARRAY = str2.split('');
    const resultArray = [];
    
    for(let i = 0; i < str1.length; i++) {
        resultArray.push(STR1_ARRAY[i], STR2_ARRAY[i]);
    }
    
    return resultArray.join('');
}