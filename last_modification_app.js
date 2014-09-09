var mod = require("./last_modification");
var strftime = require("strftime");

var filename = process.argv[2];
mod.last_modification(filename, function(last_modified){
	var formatted = strftime("%H:%M %d.%m.%Y ", new Date(last_modified))
	console.log(formatted);
});