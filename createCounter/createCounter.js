/**
 * @param {number} n
 * @return {Function} counter
 */

/*
 * Time Complexity: O(1)
 * Space Complexity: O(1)
*/
var incrementThenReturn = function(n) {
    let counter = n - 1;
    return function() {
        counter += 1;
        return counter;
    };
};

var postfixIncrementSyntax = function(n) {
    return function() {
       return n++; 
    };
};

var postfixIncrementSyntaxWithArrowFunction = function(n) {
    return () => { return n++; }
}

/*
 * Time Complexity: O(1)
 * Space Complexity: O(n)
*/
var incrementList = function(n) {
    let list = [];
    return function() {
       list.push(n);
       return n++; 
    };
};

// Testing
const counter1 = incrementThenReturn(5);
console.log(counter1()); // 5
console.log(counter1()); // 6

const counter2 = postfixIncrementSyntax(10);
console.log(counter2()); // 10
console.log(counter2()); // 11

const counter3 = postfixIncrementSyntaxWithArrowFunction(15);
console.log(counter3()); // 15
console.log(counter3()); // 16

const counter4 = incrementList(20);
console.log(counter4()); // 20
console.log(counter4()); // 21