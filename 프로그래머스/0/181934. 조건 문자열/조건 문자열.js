function boolToNumber(bool) {
    return Number(bool);
}

function solution(ineq, eq, n, m) {
    switch(ineq) {
        case '>': {
            if(eq === '=') {
                return boolToNumber(n >= m);
            } else {
                return boolToNumber(n > m);
            }
        }
        case '<': {
            if(eq === '=') {
                return boolToNumber(n <= m);
            } else {
                return boolToNumber(n < m);
            }
        }
    }
}