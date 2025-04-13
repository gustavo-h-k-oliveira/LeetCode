/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// Time and space complexity: O(n) -> n array elements.
var mapForEach = function(arr, fn) {
    let returnedArray = [];

    arr.forEach((val, index) => {
        returnedArray.push(fn(val, index));
    });

    return returnedArray;
};

var mapFor = function(arr, fn) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
}

// Tests
const double = mapForEach([1, 2, 3], (num) => num * 2);
const square = mapForEach([3, 9, 12], (num) => num ** 2);

console.log(double);
console.log(square);