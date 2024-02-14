function solution(s) {
    const numberArray = s.split(' ');
    const maxNumber = Math.max(...numberArray);
    const minNumber = Math.min(...numberArray);
    
    return `${minNumber} ${maxNumber}`;
}