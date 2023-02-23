function closest3Sum(nums, target){
    // sort Array O(nlogn)
    nums.sort((a,b) => a -b);
    console.log(nums);
    let closetSum = Number.POSITIVE_INFINITY;
    let minDif = Number.POSITIVE_INFINITY;
    for (let i = 0 ; i < nums.length - 2; i++){
        let left = i+1;
        let right = nums.length -1;
        while (left < right){
            let currentSum = nums[i] + nums[left] + nums[right];
            let currentDif = currentSum - target;
            if (currentDif == 0) return currentSum;
            if (Math.abs(currentDif) < minDif) {
                minDif = Math.abs(currentDif);
                closetSum = currentSum;
            }
            if (currentDif > 0) {
                while (nums[right] == nums[right-1]){
                    right--;
                }
                right--;
            } else {
                while(nums[left] == nums[left+1]){
                    left++;
                }
                left++;
            }
        }
    }

    return closetSum;
}

const nums = [0,0,0];
const target = 1;
let result = closest3Sum(nums, target);
console.log(result);