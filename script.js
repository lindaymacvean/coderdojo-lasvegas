
var d;

$('#wood').html('You are in a dark wood choose left or right');

//Lets add the keyboard controls now
$( document ).keydown(function(e) {
  d = e.keyCode;
  checkCode();
});

function checkCode() {
	if (d === 38) {
	  	alert('you failed');
	  }
	if (d === 37) {
		document.write('you meet a dwarf and he gives you a sword! You can now go back');

	}
}
