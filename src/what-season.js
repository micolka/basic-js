const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (toString.call(date) !== '[object Date]') throw new Error("Invalid argument");

  let month = "";

  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      month = "winter";
      break;
    case 2:
    case 3:
    case 4:
      month = "spring";
      break;
    case 5:
    case 6:
    case 7:
      month = "summer";
      break;
    case 8:
    case 9:
    case 10:
      month = "autumn";
      break;
  }

  return month;
};
