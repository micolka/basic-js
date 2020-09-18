const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if( !Array.isArray(members)) return false;

  members = members.map( el => {
		if (typeof(el) === 'string') {
			return el.trim()[0].toUpperCase();
		}
	});

	return members.sort().join('');
  
};
