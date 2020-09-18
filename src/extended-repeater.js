const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  let {
    repeatTimes = 0,
    separator = "+",
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = options;

  let i = 0;
  let j = 0;

  str = String(str)
  addition = String(addition)

  do {
    j = 0;
    result.push(str);
    if (addition) {
      do {
        result.push(addition);
        if (j < additionRepeatTimes - 1) result.push(additionSeparator);
        j++;
      } while (j < additionRepeatTimes);
    }
    if (i < repeatTimes - 1) result.push(separator);
    i++;
  } while (i < repeatTimes);

  return result.join("");
};
