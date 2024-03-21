function solution(num_list, n) {
    const result = num_list.filter((_, index) => index % n === 0);
    
    return result;
}