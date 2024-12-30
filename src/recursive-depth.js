const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, currentDepth = 0, maxDepth = 0) {
    currentDepth++;
    arr.forEach(function(element) {
      if (Array.isArray(element)) {
        [currentDepth, maxDepth] = this.calculateDepth(element, currentDepth, maxDepth);
      }
    }, this);
    if (maxDepth < currentDepth) {
      maxDepth = currentDepth;
    }
    if (currentDepth === 1) {
      return maxDepth;
    }
    currentDepth--;
    return [currentDepth, maxDepth];
  }
}

module.exports = {
  DepthCalculator
};
