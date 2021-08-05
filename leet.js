//283. Move Zeroes Easy
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

//  /**
// #  * @param {number[]} nums
// #  * @return {void} Do not return anything, modify nums in-place instead.
// #  */

 // first make a switch variable
 // going to start a while switch false loop
 // set i and j variables in 2 for loops
 // if j is out of bounds will skip
 // compare i and j checking for 0's
 // if found switch in array and set switch
 // not continue iterating
 //once at end return original array 
 var moveZeroes = function(nums) {
     let sorted = false;
 //     [0,1,0,3,12]
     while (!sorted){
         for (i=0; i < nums.length; i++){
             for (j=i+1; j < nums.length; j++){ //nums.length = 5
                 if (j === nums.length){
                     break;
                 }else {
                     if (nums[i]===0 && nums[j]!==0){
                         let oldj = nums[j];//1
                         nums[j] = nums[i];//0
                         nums[i] = oldj;//1
                         sorted = false;
                     }
                   
                 }
                 sorted = true;
             }
         }
     }
     return nums;
 };

 //1. Two Sum
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//You can return the answer in any order.
//
//
//
//    Example 1:
//
//Input: nums = [2, 7, 11, 15], target = 9
//Output: [0, 1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//    Example 2:
//
//Input: nums = [3, 2, 4], target = 6
//Output: [1, 2]
//Example 3:
//
//Input: nums = [3, 3], target = 6
//Output: [0, 1]
//
//
//Constraints:
//
//2 <= nums.length <= 104
//    - 109 <= nums[i] <= 109
//    - 109 <= target <= 109
//Only one valid answer exists.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function (nums, target) {
    let sums = [];

    for (let i = 0; i < nums.length; i++) {
        if ((i + 1) > nums.length) break;
        for (let j = 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target && i !== j) {
                sums.push(i, j)
                return sums;
            }
        }


    }
    return sums;
};





