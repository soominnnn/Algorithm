function solution(num_list) {
    const ODD = num_list.filter((el,index) => {
        if(index % 2 === 1) return el;
    }).reduce((a, b) => Number(a) + Number(b));
    
    const EVEN = num_list.filter((el, index) => {
        if(index % 2 === 0) return el;
    }).reduce((a, b) => Number(a) + Number(b));
    
    return ODD > EVEN ? ODD : EVEN;
}