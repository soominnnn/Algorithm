function solution(spell, dic) {
    const includeArray = dic.filter(el => {
        for(let i = 0; i < spell.length; i++) {
            if(el.includes(spell[i]) !== true) {
                return false;
            }
        }
        return true;
    });
    
    return includeArray.length >= 1 ? 1 : 2;
}