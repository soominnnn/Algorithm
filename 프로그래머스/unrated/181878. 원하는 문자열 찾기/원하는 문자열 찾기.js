function solution(myString, pat) {
    const RESULT = myString.toUpperCase().includes(pat.toUpperCase());
    
    return Number(RESULT);
}