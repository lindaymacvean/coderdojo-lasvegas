
var d;
var level = 1;

$('#wood').html('You are in a dark wood choose left or right');

//Lets add the keyboard controls now
$( document ).keydown(function(e) {
  d = e.keyCode;
  checkCode();
});

function checkCode() {
	if (level === 1 && d === 39 ) {
	  	alert('you get eaten by an ogre, you failed');
	  }
	if (d === 37) {
		level=2;
		$('#wood').html('you meet a dwarf and he gives you a sword! You can now go back');

	}
}
