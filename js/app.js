// This is app.js
// fuck you

$(function(){
  var james = $("#james").text();
  console.log(james);

  // -=-=-=-=-=-=-=-=-=-= 
  // _ UNDERSCORE
  // -=-=-=-=-=-=-=-=-=-= 
  var myArr = [2,10,55,234,99,123,123];
  var MyObject = [{name: "james", game: "programming"}, {name: "jon", game: "drafting"}];
  var hasPassed = _(MyObject).pluck("name").map(function(myA){return myA + " fuck you"});
  console.log(hasPassed);

});
