export function closest3Sum(nums, target, work_queue) {
    // sort Array O(nlogn)
    target = Number(target);
    work_queue.push({
        title: 'Start Sorting Array'
    });
    nums.sort((a, b) => a - b);
    work_queue.push({
        title: 'Done Array',
        data: nums,
    });
    let closetSum = Number.POSITIVE_INFINITY;
    let minDif = Number.POSITIVE_INFINITY;
    let [current, head, tail] = [-1, -1, -1];
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        work_queue.push({
            title: 'Computing',
            data: [i, left, right],
        });
        while (left < right) {
            let currentSum = Number(nums[i]) + Number(nums[left]) + Number(nums[right]);
            let currentDif = currentSum - target;
            if (currentDif == 0) {
                work_queue.push({
                    title: 'Finish',
                    data: [i, left, right],
                });
                return currentSum;
            }
            if (Math.abs(currentDif) < minDif) {
                minDif = Math.abs(currentDif);
                closetSum = currentSum;
                [current, head, tail] = [i, left, right];
            }
            if (currentDif > 0) {
                while (nums[right] == nums[right - 1]) {
                    right--;
                    if (left < right) {
                        work_queue.push({
                            title: 'Computing',
                            data: [i, left, right],
                        });
                    }
                }
                right--;
                if (left < right) {
                    work_queue.push({
                        title: 'Computing',
                        data: [i, left, right],
                    });
                }
            } else {
                while (nums[left] == nums[left + 1]) {
                    left++;
                    if (left < right) {
                        work_queue.push({
                            title: 'Computing',
                            data: [i, left, right],
                        });
                    }
                }
                left++;
                if (left < right) {
                    work_queue.push({
                        title: 'Computing',
                        data: [i, left, right],
                    });
                }
            }
        }
    }
    work_queue.push({
        title: 'Finish',
        data: [current, head, tail]
    })
    return closetSum;
}
