function solution(nums) {
    const SET_POCKETMON = [...new Set(nums)];
    const PICK_COUNT = nums.length / 2;
    
    return SET_POCKETMON.length > PICK_COUNT ? PICK_COUNT : SET_POCKETMON.length;
}