/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const counts = {};
    
    for (let num of nums){
        if (num in counts) counts[num] -= 1;
        else counts[num] = 1;
    }
    
    for (let num in counts){
        if (counts[num] !== 0) return num;
    }
};