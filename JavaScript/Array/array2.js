/*

Task 2:



Write a function that does the following task.



You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Also, mention the Time and Space Complexity of your solution

Constraints: 
1 <= prices.length <= 105
0 <= prices[i] <= 104

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/



function maxProfit(prices) {
    // Initialize variables
    let minPrice = Infinity;
    let maxProfit = 0;

// Iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if the current price is lower
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate profit if current price is higher than minPrice
            let profit = prices[i] - minPrice;
            // Update maxProfit if the current profit is higher
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1));  // Output: 5

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2));  // Output: 0

/*

Time Complexity : O(n)
Space Complexity : O(1)

*/