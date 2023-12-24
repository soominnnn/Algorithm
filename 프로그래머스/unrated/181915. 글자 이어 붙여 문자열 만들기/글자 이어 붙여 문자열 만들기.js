function solution(my_string, index_list) {
    const RESULT_ARRAY = [];
    for(let i = 0; i < index_list.length; i++) {
        RESULT_ARRAY.push(my_string[index_list[i]]);
    }
    
    return RESULT_ARRAY.join('');
}