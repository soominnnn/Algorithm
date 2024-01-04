function solution(myString) {
    const FORWARD_STRING = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    const SPLIT_STRING = myString.split('');
    return SPLIT_STRING.map(el => FORWARD_STRING.includes(el) === true ? 'l' : el).join('');
}