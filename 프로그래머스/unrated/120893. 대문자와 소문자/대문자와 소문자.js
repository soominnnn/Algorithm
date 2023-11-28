function solution(my_string) {
    const RESULT = my_string.split('').map(el => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase());
    return RESULT.join('');
}