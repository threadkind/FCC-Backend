var fs = require('fs');

function dir(error, data){
    if (error){
        console.log("Something went wrong!");
        
    }
    else{
        for(var i = 0; i < data.length; i++){
            
            if(data[i].endsWith("."+process.argv[3])){
            	console.log(data[i]);

            }
        }
    }
    
}

fs.readdir(process.argv[2], dir);
