/*
Assignment on Array Task 1:

Write a function that does the following task.
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Also, mention the Time and Space Complexity of your solution
Use of C++ or JavaScript is preferred.

Constraints: 
2 <= nums.length <= 104 
-109 <= nums[i] <= 109 
-109 <= target <= 109
Only one valid answer exists.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // If no solution is found, although the problem guarantees one solution.
    console.log('No two sum solution');
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 26;
console.log(twoSum(nums, target));  // Output: [0, 1]


/*

Time Complexity : O(n square)
Space Complexity : O(1)

*/