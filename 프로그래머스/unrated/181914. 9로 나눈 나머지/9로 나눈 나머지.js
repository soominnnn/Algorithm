function solution(number) {
    const SUM = number.split('').reduce((a, b) => Number(a) + Number(b));
    return SUM % 9;
}