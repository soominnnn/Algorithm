function solution(my_string, m, c) {
    const resultArray = [];
    const MY_STRING_ARRAY = my_string.split('');
    
    for(let i = c - 1; i < my_string.length; i += m) {
        resultArray.push(MY_STRING_ARRAY[i]);
    }
    
    return resultArray.join('');
}