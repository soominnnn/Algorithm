function solution(numbers, direction) {
    let array = numbers;
    let tmp;
    if(direction === 'left') {
        tmp = array.shift();
        array.push(tmp);
    } else {
        tmp = array.pop();
        array.unshift(tmp);
    }
    return array;
}