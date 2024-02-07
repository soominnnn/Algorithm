function solution(s){
    const SPLIT_ARRAY = s.toLowerCase().split('');
    const P_COUNT = SPLIT_ARRAY.filter(el => el === 'p').length;
    const Y_COUNT = SPLIT_ARRAY.filter(el => el === 'y').length;
    
    return P_COUNT === Y_COUNT ? true : false;
}