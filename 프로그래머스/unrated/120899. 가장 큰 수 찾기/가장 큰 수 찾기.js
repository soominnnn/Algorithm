function solution(array) {
    const ARRAY = array.map(el => el).sort((a,b) => b - a);
    const INDEX = array.indexOf(ARRAY[0]);
    return [ARRAY[0],INDEX];
}