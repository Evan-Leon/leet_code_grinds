/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let candidate = nums[0];
    let counter = 1;
    
    for (let i = 1; i < nums.length; i +=1){
        if (counter === 0){
            counter = 1;
            candidate = nums[i];
        }else if (candidate === nums[i]){
            counter += 1;
        }else {
            counter -= 1;
        }
    }
    return candidate;
};