function solution(arr, queries) {
    let result = arr.map(el => el);
    
    for(let i = 0; i <= queries.length - 1; i++) {
        for(let j = queries[i][0]; j <= queries[i][1]; j++) {
            result[j] += 1;
        }
    }
    
    return result;
}