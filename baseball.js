/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];

    for (let op of operations) {
        // Addition of last two scores
        if (op === "+") {
            let last = stack[stack.length - 1];
            let secondLast = stack[stack.length - 2];
            stack.push(last + secondLast);
        }

        else if (op === "D") {
            // Double the last score
            stack.push(stack[stack.length -1] * 2);
        }

        else if (op === "C") {
            // Invalidate the last score
            stack.pop();
        }

        else {
            // Regular score
            stack.push(parseInt(op));
        }

    }
    return stack.reduce((a,b) => a + b, 0);
};