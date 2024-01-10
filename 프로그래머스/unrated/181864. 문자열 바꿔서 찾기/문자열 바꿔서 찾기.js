function solution(myString, pat) {
    const STRING = myString.split('').map(el => {
        if(el === 'A') {
            return el = 'B';
        } else {
            return el = 'A';
        }
    });
    
    return Number(STRING.join('').includes(pat));
}