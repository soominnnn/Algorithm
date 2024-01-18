function solution(num) {
    let sum = num;
    let count = 0;
    
    while(sum !== 1) {
        if(sum % 2 === 0) {
            sum = sum / 2;
        } else {
            sum = sum * 3 + 1;
        }
        
        count++;
        if(count >= 500) {
            count = -1;
            break;
        }
    }
    
    return count;
}