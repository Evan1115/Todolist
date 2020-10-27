const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");

var items = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');




app.get("/", function (req, res) {
   

   var options = {
      day: "numeric",
      month: "long",
      year: "numeric"
   }
   var today = new Date();
   var day = today.toLocaleDateString("en-US", options);
  

  

   res.render("list", {
      kindofday: day,
      itemAdded: items
   });
});

app.post("/", function (req, res) {

   let addeditem = req.body.newItem;

   items.push(addeditem);
   
   res.redirect("/")
   
});

app.listen(3000, function(req,res){
    console.log("server is listening to port 3000...");
});