function solution(phone_number) {
    const SPLIT_ARRAY = phone_number.split('').map((el, index) => index > phone_number.length - 5 ? el : '*');
    
    return SPLIT_ARRAY.join('')
}