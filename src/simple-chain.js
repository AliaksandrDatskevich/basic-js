const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  str: '',
  result: '',
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('');
    } else this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!")
    };
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.arr.forEach((x) => this.str += `~( ${x} )~`);
    this.result = this.str.slice(1, -1);
    this.str = '';
    this.arr = [];
    return this.result;
  }
}

module.exports = {
  chainMaker
};
