var fs = require('fs');

function async(error, data){
    if (error){
        console.log("Something went wrong!");
    }
    else {
        
        var str = data.toString();
        var numLines = (str.split('\n').length)-1;

        console.log(numLines);
    }
}

fs.readFile(process.argv[2], async);
