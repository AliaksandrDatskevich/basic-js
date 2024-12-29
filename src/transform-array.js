const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const newArray = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next' && i + 1 < arr.length) {
      newArray.push(arr[i + 1]);
    }
    if (arr[i] === '--double-prev' && arr[i - 1] !== undefined && i - 1 > 0) {
      newArray.push(arr[i - 1]);
    }
    if (arr[i] === '--discard-prev' && arr[i - 1]) {
      newArray.pop();
      newArray.push(undefined);
    }
    if (arr[i] === '--discard-next' && i + 1 < arr.length) {
      i++;
      i++;
      newArray.push(undefined);
    }
    if (!(arr[i] === '--double-next' || arr[i] === '--double-prev' || arr[i] === '--discard-prev' || arr[i] === '--discard-next')) {
      newArray.push(arr[i]);
    }
  }
  return newArray.filter((x) => {return x !== undefined});
}

module.exports = {
  transform
};
