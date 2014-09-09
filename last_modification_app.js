var mod = require("./last_modification");
var filename = process.argv[2];


var format = function(date) {
	return date.getHours() + ":" + 
		   date.getMinutes() + " " +
		   date.getDate() + "." +
		   (date.getMonth()+1) + "." +
		   date.getFullYear();

}


mod.last_modification(filename, function(last_modified){
	var formatted = format(new Date(last_modified));
	console.log(formatted);
});