function solution(rny_string) {
    const IS_RNY_STRING_IN_M = rny_string.includes('m');
    const RESULT = IS_RNY_STRING_IN_M ? rny_string.replaceAll('m','rn') : rny_string;
    
    return RESULT;
}