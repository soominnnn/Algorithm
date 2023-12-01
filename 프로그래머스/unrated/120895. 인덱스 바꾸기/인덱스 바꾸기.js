function solution(my_string, num1, num2) {
    let array = my_string.split('');
    let tmp = 0;
    tmp = array[num1];
    array[num1] = array[num2];
    array[num2] = tmp;
    return array.join('');
}