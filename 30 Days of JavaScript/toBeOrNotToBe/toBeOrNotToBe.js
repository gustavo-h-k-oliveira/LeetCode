/**
 * @param {string} val
 * @return {Object}
 */
// Time and Space Complexity: O(1)
var expectWithNamedFunctions = function(expectedVal) {
    function toBe(val) {
        if (expectedVal === val) {
            return true;
        } else {
            throw "Not Equal";
        }

    }
    function notToBe(val) {
        if (expectedVal !== val) {
            return true;
        } else {
            throw "Equal";
        }
    }

    return {
        toBe,
        notToBe
    };
};

// More concise and functional code because it directly returns an object with two anonymous functions. 
var expectTraditional = function(val) {
    return {
        toBe: function(another) {
            if (val === another) return true;
            // Better use of `Error` to throw instances for debugging and tracing.
            else throw new Error('Not Equal');
        },
        notToBe: function(another) {
            if (val !== another) return true;
            else throw new Error('Equal');
        }
    }
};

var expectWithArrowFunction = val => ({
    toBe: another => {
        if (val === another) return true;
        throw new Error("Not Equal");
    },
    notToBe: another => {
        if (val !== another) return true;
        throw new Error("Equal")
    }
});

console.log(expectWithNamedFunctions(5).toBe(5));      // ✅ true
console.log(expectWithNamedFunctions(5).notToBe(10));  // ✅ true
console.log(expectWithNamedFunctions(5).notToBe(5));   // ❌ lança "Equal"
console.log(expectWithNamedFunctions(5).toBe(null));   // ❌ lança "Not Equal"

console.log(expectTraditional(5).toBe(5));      // ✅ true
console.log(expectTraditional(5).notToBe(10));  // ✅ true
console.log(expectTraditional(5).notToBe(5));   // ❌ lança "Equal"
console.log(expectTraditional(5).toBe(null));   // ❌ lança "Not Equal"

console.log(expectWithArrowFunction(5).toBe(5));      // ✅ true
console.log(expectWithArrowFunction(5).notToBe(10));  // ✅ true
console.log(expectWithArrowFunction(5).notToBe(5));   // ❌ lança "Equal"
console.log(expectWithArrowFunction(5).toBe(null));   // ❌ lança "Not Equal"
