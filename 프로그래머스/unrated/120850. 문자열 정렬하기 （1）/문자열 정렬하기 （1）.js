function solution(my_string) {
    var arr = [...my_string].filter(el => Number(el) || el === "0");
    return arr.map(Number).sort((a,b) => a-b);
}