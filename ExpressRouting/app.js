var express = require("express");
var app = express();

////Routes
app.get("/",function(req,res){
  res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:animal",function(req,res){
  var animal = req.params.animal;
  var sound = "";
  if(animal ==="pig"){
    sound="Oink"; 
  }else if(animal ==="cow"){
    sound="Moo";          
  }else{
    sound="Woof Woof!";
  }
  res.send("The "+animal+" says '"+sound+"'");
});

app.get("/repeat/:str/:no",function(req,res){
  var str = req.params.str;
  var no = req.params.no;
  var sol = "";
  for(var i=0;i<no;i++){
    sol = sol+str+" ";
  }
  res.send(""+sol);
});

///all star
app.get("*",function(req,res){
  res.send("Sorry, page not found... what are you doing with your life?");
});



/////Listen
app.listen(3000,function(){
  console.log("Started server on port 3000");
})


