
alert('hello');


var d = prompt('hello tell me your name?');

//Lets add the keyboard controls now
$( document ).keydown(function(e) {
  alert( "Handler for .keydown() called."+e );
  console.log(e);
});

