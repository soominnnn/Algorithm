function solution(my_string, overwrite_string, s) {
    let stringArray = my_string.split('');
    const OVER_STRING_ARRAY = overwrite_string.split('');
    
    for(let i = 0; i < OVER_STRING_ARRAY.length; i++) {
        stringArray[i + s] = OVER_STRING_ARRAY[i];
    };
    
    return stringArray.join('');
}