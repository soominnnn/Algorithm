function solution(age) {
    const ARRAY = String(age).split('');
    const RESULT = ARRAY.map(el => String.fromCharCode(97 + Number(el)));
    return RESULT.join('');
}