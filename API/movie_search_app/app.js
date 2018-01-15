var express = require("express");
var app = express();
var request = require("request")

app.set("view engine", "ejs");

app.get("/",function(req,res){
  res.render("search");
});

app.get("/request", function(req, res) {
  var query = req.query.search;
  var url = "http://omdbapi.com/?s="+query+"&apikey=thewdb"
  request(url, function(error, response, body) {
    var data = JSON.parse(body);
    if (!error && response.statusCode == 200) {
      //           res.send(repl.Search[0]);
      res.render("results", {
        data: data
      });
    }
  });
});


app.listen(3000, function() {
  console.log("Movie app Server start on port 3000");
});