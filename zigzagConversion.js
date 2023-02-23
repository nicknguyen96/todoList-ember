/**
 * @param {string} str String input
 * @param {number} n number of level
 * @param {string} result string output
 */
function zigzagConversion(str, n){
    if (n == 1) return str;
    let result = '';
    let current = 0;
    let level = new Array(n).fill('');
    let step = 1;
    for (let i = 0 ; i < str.length; i++){
        if (!level[current]) level[current] = str[i];
        else level[current] += str[i];
        current += step;
        if (current == 0) {
            step = 1;
        } else if (current == n-1){
            step = -1;
        }
    }
    console.log(str);
    console.log(n);
    console.log(level);
}
`
    
`

let str = 'nhatnguyen';
let n = 3;
console.log(zigzagConversion(str,n));