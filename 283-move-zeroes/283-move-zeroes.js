/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length <=1) return nums;
    let pointer = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            nums[pointer] = nums[i]
            nums[i] = pointer === i ? nums[i] : 0 ;
            pointer ++
        }
    }
    return nums;
};