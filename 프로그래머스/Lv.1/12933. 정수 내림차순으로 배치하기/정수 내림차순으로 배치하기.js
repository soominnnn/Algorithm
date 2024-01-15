function solution(n) {
    return Number(String(n).split('').map(el => Number(el)).sort((a, b) => b - a).join(''));
}