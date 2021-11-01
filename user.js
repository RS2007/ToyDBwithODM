const ODM = require("./index.js")

class User extends ODM{
	constructor(document) {
		super(document);
	}
}

function createFromModel(modelClass,document) {
	return new modelClass(document);
}

createFromModel(User,{first: "India",second: "Australia"})

