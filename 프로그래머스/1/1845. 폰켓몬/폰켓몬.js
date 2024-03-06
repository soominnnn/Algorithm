function solution(nums) {
    const maxCount = nums.length / 2;
    const nonDuplicateCount = [...new Set(nums)].length;
    
    return nonDuplicateCount > maxCount ? maxCount : nonDuplicateCount;
}