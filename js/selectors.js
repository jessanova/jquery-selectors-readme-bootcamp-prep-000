// declare your functions here...

function paragraphSelector(){
  console.log($('p'));
  return $('p');
};

lastImageSelector(){
  console.log($('img:last'));
  return $('img:last');
};

ninjaBabySelector(){
  console.log($('img#baby-ninja'));
  return $('img#baby-ninja');
};

divSelector(){
  console.log($('.pics'));
  return $('.pics');
};

firstListItem(){
  console.log($('ul #pic-list:first-child'));
  return $('ul #pic-list:first-child');
};