
		
const fs=require("fs");



class ODM{
	constructor(document) {
		const name=this.constructor.name;
        
		let db = require("./db.json")
		if(!document._id) {
			document._id=Math.floor(Math.random()*1000).toString();
		}
		if(!db[name]) {
			db[name]={};
		}
		db[name][document._id] = document	

		fs.writeFileSync("./db.json",JSON.stringify(db,null,2),{encoding:'utf-8',flag:'w+'});
		
	}
}

module.exports=ODM;