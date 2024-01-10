function solution(strArr) {
    return strArr.map((el, index) => {
        if(index % 2 === 0) {
            return el.toLowerCase();
        } else {
            return el.toUpperCase();
        }
    })
}