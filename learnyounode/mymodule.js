var fs = require('fs');
var path = require('path');


module.exports = function (direct, extn, callback){
	extn = "." + extn;

	fs.readdir(direct, function(error, list){

		if (error){
        	return callback(error);
        
    	}
    	else{
    		var filtered = [];

    		for (var i = 0; i < list.length; i++){
    			if(list[i].endsWith(extn)){
    				filtered.push(list[i]);
    			}
    		}
    		return callback(null, filtered);
    	}
    	
	});//end readdir
}//end module

