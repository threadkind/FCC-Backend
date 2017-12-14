var mymodule = require('./mymodule.js');

var directory = process.argv[2];
var extension = process.argv[3];

mymodule(directory, extension, function(error, filteredList){
	if(error){
		return console.error(error);
	}
	else {
		filteredList.forEach(function(file){
			console.log(file);
		});
	}
});

