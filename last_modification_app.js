var mod = require("./last_modification");
var filename = process.argv[2];
var strftime = require('strftime');


var format = function(date) {
	return strftime('%B %d, %Y %H:%M:%S', date);
}

var handleDate = function(last_modified){

	var formatted; 
	if(last_modified !== false) formatted = format(new Date(last_modified));	
	else formatted = last_modified;
	console.log(formatted);
}
mod.last_modification(filename, handleDate);