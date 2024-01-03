function solution(num_list, n) {
    const SET_LIST = new Set(num_list);
    return Number(SET_LIST.has(n));
}