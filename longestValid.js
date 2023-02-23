// public class Solution {

//     public int longestValidParentheses(String s) {
//         int maxans = 0;
//         Stack<Integer> stack = new Stack<>();
//         stack.push(-1);
//         for (int i = 0; i < s.length(); i++) {
//             if (s.charAt(i) == '(') {
//                 stack.push(i);
//             } else {
//                 stack.pop();
//                 if (stack.empty()) {
//                     stack.push(i);
//                 } else {
//                     maxans = Math.max(maxans, i - stack.peek());
//                 }
//             }
//         }
//         return maxans;
//     }
// }

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
    let result = 0;
    // to get the first parenthesis if we have one.
    let stack = [-1];
    let current = 0;
    for (let current = 0 ; current < s.length; current++) {
        if (s[current] == '(') {
            stack.push(current);
        } else {
            stack.pop();
            if (stack.length == 0){
                stack.push(current);
            } else {
                result = Math.max(result, current - stack[stack.length - 1])
            }
        }
    }

    return result;
};

// const s = "(()";
// const s = "()(()";
const s = "()"
console.log(longestValidParentheses(s))