
alert('hello');


var d = prompt('hello tell me your name?');

//Lets add the keyboard controls now
$( document ).keydown(function(e) {
  alert( "You just pressed key number: "+e.keyCode );
});

