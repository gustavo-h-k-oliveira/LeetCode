/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// 52 ms
// Time and space complexity: O(1)
var createCounterWithArrowFunctions = function(init) {
    let currentValue = init;
  
    return {
      increment: () => {
          return ++currentValue;
      },
      decrement: () => {
          return --currentValue;
      },
      reset: () => {
          currentValue = init;
          return currentValue;
      }
    }  
  };
  
  /**
   * const counter = createCounter(5)
   * counter.increment(); // 6
   * counter.reset(); // 5
   * counter.decrement(); // 4
   */

// 21 ms
var createCounterWithES6 = function(init) {
    let initial = init
    return {
        increment(){
            return ++init
        } , 
        decrement(){
            return --init
        } ,
        reset(){
            init = initial
            return init
        }
    }
};
