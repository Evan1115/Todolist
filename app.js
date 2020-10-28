const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const items = [];
const workItem = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');




app.get("/", function (req, res) {
   

  
   const day = date.getDate();

   res.render("list", {
      listTitle: day,
      itemAdded: items
   });
});

app.post("/", function (req, res) {
    
   const addeditem = req.body.newItem;
   if (req.body.list == "Work") {
      
     
    
      workItem.push(addeditem);
      res.redirect("/work"); //redirect to /work app.get

   } else {

     
      items.push(addeditem);
      res.redirect("/");   //redirect to / app.get

    }
   
   
});

app.get("/work", function (req, res) {
   const title = "Work List";
   res.render("list", {
      listTitle: title,
      itemAdded: workItem
   });
});



app.listen(process.env.PORT || 3000, function(req,res){
    console.log("server is listening to port 3000...");
});