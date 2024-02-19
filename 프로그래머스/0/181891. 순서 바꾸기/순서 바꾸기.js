function solution(num_list, n) {
    const resultArray = [];
    const frontArray = num_list.slice(0, n);
    const backArray = num_list.slice(n, num_list.length);
    
    return backArray.concat(frontArray);
}