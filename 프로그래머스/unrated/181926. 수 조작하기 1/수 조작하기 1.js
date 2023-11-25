function solution(n, control) {
    let result = n;
    const CONTROL_ARRAY = control.split('');
    for(let key of CONTROL_ARRAY) {
        switch(key) {
            case "w" :
                result++;
                break;
            case "s" :
                result--;
                break;
            case "d" :
                result += 10;
                break;
            case "a" :
                result -= 10;
                break;
        }
    }
    return result;
}