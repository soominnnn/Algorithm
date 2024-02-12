function solution(order) {
    const AMOUNT = [4500, 5000];
    const americanoCount = order.filter(el => el.includes('americano')).length;
    const cafelatteCount = order.filter(el => el.includes('cafelatte')).length;
    const anythingCount = order.filter(el => el === 'anything').length;
    
    return (americanoCount + anythingCount) * AMOUNT[0] + cafelatteCount * AMOUNT[1];
}