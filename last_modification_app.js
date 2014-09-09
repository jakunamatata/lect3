var mod = require("./last_modification");
var filename = process.argv[2];


var format = function(date) {
	return date.getHours() + ":" + 
		   date.getMinutes() + " " +
		   date.getDate() + "." +
		   (date.getMonth()+1) + "." +
		   date.getFullYear();

}

var handleDate = function(last_modified){

	var formatted; 
	if(last_modified !== false) formatted = format(new Date(last_modified));	
	else formatted = last_modified;
	console.log(formatted);
}
mod.last_modification(filename, handleDate);