const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    result += str;
    if (options.addition || options.addition === false || options.addition === null) {
      for (let j = 0; j < (options.additionRepeatTimes || 1); j++) {
        result += options.addition;
        if (options.additionSeparator && j != (options.additionRepeatTimes || 1) - 1) {
          result += options.additionSeparator;
        } else if (j != (options.additionRepeatTimes || 1) - 1) {
          result += '|';
        }
      }
    }
    if (i != (options.repeatTimes || 1) - 1) {
      if (options.separator) {
        result += options.separator;
      } else {
        result += '+';
      }
    }
  }
  return result;
}

// console.log(repeater('la', { repeatTimes: 3 })); // 'la+la+la'
// console.log(repeater('single', { repeatTimes: 1 })); // 'single'
// console.log(repeater('12345', { repeatTimes: 5 })); // '12345+12345+12345+12345+12345'

// console.log(repeater('la', { repeatTimes: 3, separator: 's' })); // 'laslasla'
// console.log(repeater('point', { repeatTimes: 3, separator: '&&&' })); // 'point&&&point&&&point'
// console.log(repeater('12345', { repeatTimes: 5, separator: '3 words separator' })); // '123453 words separator123453 words separator123453 words separator123453 words separator12345'

// console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 })); // 'la+sla+sla+'
// console.log(repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 })); // 'LALA++sLALA++sLALA++'

// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })); // 'TESTstrADD!'
// console.log(repeater('TESTstr', { repeatTimes: 3, separator: 'ds', addition: 'ADD!', additionRepeatTimes: 2, additionSeparator: ')))000' })); // 'TESTstrADD!'
// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })); // => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

// console.log(repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' })); // '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]'
// console.log(repeater(-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' })); // '-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]'
// console.log(repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' })); // '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4'
// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })); // 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })); // 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'

// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })); // 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionSeparator: '222', additionRepeatTimes: 3 })); // 'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION'
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 })); // 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION'

module.exports = {
  repeater
};
