var faker = require('faker');

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log("==========================================");
console.log("Welcome to Rahul shoppie");
console.log("==========================================");
for(var i=0;i<10;i++){
  var productName  = faker.commerce.productName();
  var price  = faker.commerce.price();
  console.log(productName+" : "+price);
}