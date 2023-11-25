function solution(arr, intervals) {
    const ARRAY = arr;
    const ARRAY_FIRST = ARRAY.slice(intervals[0][0],intervals[0][1]+1);
    const ARRAY_TWICE = ARRAY.slice(intervals[1][0],intervals[1][1]+1);
    const RESULT = ARRAY_FIRST.concat(ARRAY_TWICE);
    return RESULT;
}