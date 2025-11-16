// Example 1:

// Input: n = 4

// Output: "1211"

// Explanation:

// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"
// Example 2:

// Input: n = 1

// Output: "1"

// Explanation:

// This is the base case.

 

// Constraints:

// 1 <= n <= 30
 

// Follow up: Could you solve it iteratively?

var countAndSay = function(n) {
    if (n === 1) return "1";
    let prev = countAndSay(n - 1);
    let result = "";
    let count = 1;
    for (let i = 1; i < prev.length; i++) {
        if (prev[i] === prev[i - 1]) {
            count++;
        } else {
            result += count.toString() + prev[i - 1];
            count = 1;
        }

    }
    result += count.toString() + prev[prev.length - 1];
    return result;
}
console.log(countAndSay(4));