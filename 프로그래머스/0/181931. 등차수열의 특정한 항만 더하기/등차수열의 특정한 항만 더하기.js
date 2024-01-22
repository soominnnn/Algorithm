function solution(a, d, included) {
    const NUMBER_ARRAY = [...new Array(included.length)].map((_, i) => a + d * i);
    let sum = 0;
    
    for(let i = 0; i < included.length; i++) {
        if(included[i] === true) {
            sum += NUMBER_ARRAY[i];
        }
    }
    
    return sum;
}