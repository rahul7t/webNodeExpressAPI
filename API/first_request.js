var request = require("request");
request('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',function(error, response, body){
  if(error){
      console.log("Something went wrong");
      console.log(error);
  }else{
    if(response.statusCode==200) {
      var prsData = JSON.parse(body);
      console.log(prsData["query"]);
    }
  }
});