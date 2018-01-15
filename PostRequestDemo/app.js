var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Hrithik", "Salman", "Amir", "Akshay", "Sunny", "Abhay"];
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/",function(req,res){
  res.render("home");
});

app.get("/friends",function(req,res){
  res.render("friends", {friends : friends});
});

app.post("/addfriend",function(req,res){
  var frnd = req.body.newfriend;
  friends.push(frnd);
  res.redirect("/friends");
//   res.send("You have reached the post route!");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});