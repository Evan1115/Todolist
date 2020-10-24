const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");




app.get("/", function(req,res){
   res.send("hit port 3000");
});

app.listen(3000, function(req,res){
    console.log("server is listening to port 3000...");
});