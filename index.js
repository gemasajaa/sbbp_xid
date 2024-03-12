const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('ilW4At1jHu', uuidlib.v4());
	}

module.exports = generateId
