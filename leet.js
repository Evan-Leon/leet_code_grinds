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