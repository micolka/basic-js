const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    let flattedArr = [];
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flag = true;
        flattedArr = flattedArr.concat(arr[i]);
      }
    }
    depth++;
    if (flag) {
      return this.calculateDepth(flattedArr, depth);
    }
    return depth;
  }
};
