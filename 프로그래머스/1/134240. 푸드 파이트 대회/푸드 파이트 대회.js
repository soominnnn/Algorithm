function solution(food) {
    const foodList = [];
    
    for(let i = 1; i < food.length; i++) {
        foodList.push(String(i).repeat(Math.floor(food[i] / 2)));
    }
    
    const REVERSE_LIST = foodList.map(el => el).reverse().join('');
    
    return foodList.join('') + '0' + REVERSE_LIST;
}