function solution(str1, str2) {
    const str1Array = str1.split('');
    const str2Array = str2.split('');
    const result = [];
    
    for(let i = 0; i < str1.length; i++) {
        result.push(str1Array[i], str2Array[i]);
    }
    
    return result.join('');
}