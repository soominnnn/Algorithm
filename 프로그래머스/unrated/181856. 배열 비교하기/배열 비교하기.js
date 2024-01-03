function solution(arr1, arr2) {
    const ARR1_SUM = arr1.reduce((a,b) => Number(a) + Number(b));
    const ARR2_SUM = arr2.reduce((a,b) => Number(a) + Number(b));
    if(arr1.length > arr2.length) {
        return 1;
    }
    else if(arr1.length < arr2.length) {
        return -1;
    }
    
    if(ARR1_SUM === ARR2_SUM) {
        return 0;
    }
    else if(ARR1_SUM > ARR2_SUM) {
        return 1;
    }
    return -1;
}