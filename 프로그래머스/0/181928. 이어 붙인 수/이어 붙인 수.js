function solution(num_list) {
    const oddNumber = num_list.filter(el => el % 2 === 0).join('');
    const evenNumber = num_list.filter(el => el % 2 === 1).join('');
    const result = Number(oddNumber) + Number(evenNumber);
    
    return result;
}