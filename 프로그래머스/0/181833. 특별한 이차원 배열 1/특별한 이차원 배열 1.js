function solution(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(Array(n).fill(0));
    }

    for (let i = 0; i < result.length; i++) {
        const item = result[i];

        result[i][i] = 1;
    }

    return result;
}