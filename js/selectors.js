// declare your functions here...

var results = []

function paragraphSelector(){
  var x= $('p');
  console.log(x);
  results.push(x);
  return $(x);
}

lastImageSelector(){
  var x = $('img:last');
  console.log(x);
  return x;
};

ninjaBabySelector(){
  var x = $('img#baby-ninja');
  console.log(x);
  return x;
};

divSelector(){
  var x = $('.pics');
  console.log(x);
  return x;
};

firstListItem(){
  var x = $('ul #pic-list:first-child');
  console.log(x);
  return x;
};

paragraphSelector()
lastImageSelector()
ninjaBabySelector()
divSelector()
firstListItem()
