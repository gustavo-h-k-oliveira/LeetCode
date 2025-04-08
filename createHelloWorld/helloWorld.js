/**
 * @return {Function}
 */
// Always returns "Hello World", regardless of the arguments.
var createHelloWorld = function() {
    
    // rest parameter: accepts any number of arguments, but doesn't use them.
    return function(...args) {
        return "Hello World";
    };
};

const f = createHelloWorld();
f(); // "Hello World"
