var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home.ejs")
});

app.get("/fallinlovewith/:breed",function(req,res){
  var breed = req.params.breed;
  res.render("luv.ejs",{brd:breed});
});

app.get("/posts", function(req,res){
  var posts = [
    {title: "Post 1",author: "Sassy"},
    {title: "Dragon ball facts",author: "Trunks"},
    {title: "Pokemon batteles",author: "Brock"}
  ];
  res.render("posts.ejs",{posts:posts});
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});