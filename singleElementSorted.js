function singleNonDuplicate(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right){
        console.log(left, right);
        let middle = Math.floor((left + right) / 2);
        if (middle % 2 == 1) middle -= 1;

        if (array[middle] ==  array[middle+1]) left = middle + 2;
        else right = middle;
    }
    return array[left];
}

//             0, 1, 2, 3, 4, 5, 6, 7, 8
const array = [1, 1, 2, 2, 3, 3, 4, 5, 5];
console.log(singleNonDuplicate(array));
