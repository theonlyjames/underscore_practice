// This is app.js
$(function(){
  var james = $("#james").text();
  console.log(james);

  // -=-=-=-=-=-=-=-=-=-= 
  // _ UNDERSCORE
  // -=-=-=-=-=-=-=-=-=-= 
  var myArr = [2,10,55,234,99,123,123];
  var MyObject = [{name: "james", game: "programming"}, {name: "jon", game: "drafting"}];
  //var hasPassed = _(MyObject).pluck("name").map(function(myA){return myA + " fuck you"});
  var above50 = _(myArr).all(function(myA){return myA > 1});
  console.log(above50);

  // tens
  var tens = _.range(0, 100, 10);
  console.log(tens);

  // intersection 
  var tens = _.range(0, 100, 10), eights = _.range(0, 100, 8), fives = _.range(0, 100, 5);
  var common = _.intersection(tens, eights, fives);
  console.log(common);
  var h2James = $("#james");
  h2James.text(common);

  var myZip = _.zip(myArr, MyObject);
  for(var i = 0; i <= myZip.length; i++) {
    $("#james").append(myZip[i] + "<br>");
    console.log(myZip[i]);
  }

});
