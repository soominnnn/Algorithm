function solution(arr) {
    const firstIndex = arr.indexOf(2);
    const lastIndex = arr.lastIndexOf(2);
    const resultArray = arr.slice(firstIndex, lastIndex + 1);
    
    return resultArray.length === 0 ? [-1] : resultArray;
}