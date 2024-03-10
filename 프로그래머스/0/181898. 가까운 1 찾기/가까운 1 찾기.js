function solution(arr, idx) {
    for(let i = idx; i <= arr.length - 1; i++) {
        if(arr[i] === 1) return i;
    }
    
    return -1;
}