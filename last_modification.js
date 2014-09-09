var fs = require("fs");

exports.last_modification = function (filename, callback) {
	fs.exists(filename, function(exists){
		if(!exists) return callback(exists);

		fs.stat(filename, function(err, stats){
			callback(stats.mtime);
		});
	});

	
};