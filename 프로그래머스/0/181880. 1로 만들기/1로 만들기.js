function solution(num_list) {
    let count = 0; 
    
    num_list.map(el => {
        while(true) {
            if(el === 1) break;
            else if(el % 2 === 0) {
                el = el / 2;
            } 
            else if(el % 2 !== 0) {
                el = (el - 1) / 2;
            }
            count++;
        }
        return el;
    });
    
    return count;
}