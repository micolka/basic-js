const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
	output = [...arr]

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			(arr[i + 1]) ? output[i + 1] = output [i] = '' : output [i] = ''		
		} else if (arr[i] === '--discard-prev') {
			(arr[i - 1]) ? output[i - 1] = output [i] = '' : output [i] = ''
		} else if (arr[i] === '--double-next') {
			(arr[i + 1]) ? output[i] = arr[i + 1] : output[i] = ''
		} else if (arr[i] === '--double-prev') {
			(arr[i - 1]) ? output[i] = output[i - 1] : output[i] = ''
		} 
	}

	return output.filter( el => el !== '')
};
