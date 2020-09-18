const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === null) value = "null";
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0 || position > this.arr.length) {
      this.arr = [];
      throw new Error("Wrong position");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const str = `( ${this.arr.join(" )~~( ")} )`;
    this.arr = [];
    return str;
  },
};

module.exports = chainMaker;
