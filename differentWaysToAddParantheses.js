// Example 1:

// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0 
// (2-(1-1)) = 2
// Example 2:

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34 
// ((2*3)-(4*5)) = -14 
// ((2*(3-4))*5) = -10 
// (2*((3-4)*5)) = -10 
// (((2*3)-4)*5) = 10

var diffWaysToCompute = function(expression) {
    let memo = new Map();

    function compute(expr) {    
        if (memo.has(expr)) return memo.get(expr);

        let results = [];
        for (let i = 0; i < expr.length; i++) {
            let char = expr[i];
            if (char === '+' || char === '-' || char === '*') {
                let left = compute(expr.slice(0, i));
                let right = compute(expr.slice(i + 1));
                for (let l of left) {
                    for (let r of right) {
                        if (char === '+') {
                            results.push(l + r);
                        } else if (char === '-') {
                            results.push(l - r);
                        } else if (char === '*') {
                            results.push(l * r);
                        }
                    }   
                }
            }   
        }
        if (results.length === 0) {
            results.push(parseInt(expr));
        }
        memo.set(expr, results);
        return results;
    }
    return compute(expression);
};

console.log(diffWaysToCompute("2*3-4*5"));
 