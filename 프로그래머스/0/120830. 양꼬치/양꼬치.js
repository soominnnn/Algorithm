function solution(n, k) {
    const RAMB = 12000;
    const SODA = 2000;
    let serviceSoda = Math.floor(n / 10);
    let drinkSoda = k - serviceSoda;
    let amount = n * RAMB + drinkSoda * SODA;
    
    return amount;
}