const fs = require("fs");
fs.writeFile("message.txt","hi ",(err)=>{
    if(err ) throw err ;
    
});