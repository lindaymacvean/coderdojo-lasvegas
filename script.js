
alert('hello');


var d;

document.write('You are in a dark wood choose left or right');

//Lets add the keyboard controls now
$( document ).keydown(function(e) {
  d = e.keyCode;
});

if (d === 38) {
  	alert('you failed');
  }
