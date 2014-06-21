
var d;
var level = 1;
var sword = false;
var ogre = 'ogre.jpg';
var dwarf = 'dwarf.jpg';
var money = 'money.jpg';



$('#wood').html('You are in a dark wood choose left or right');
function loadCanvas (dataURL) {
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext('2d');
	canvas.width = 512;
	canvas.height = 480;
	document.body.appendChild(canvas);

	var imageObj = new Image();
	imageObj.onload = function() {
		ctx.drawImage(this,0,0)
	};
	imageObj.src = dataURL;
}
loadCanvas('woods.jpg');

//Lets add the keyboard controls now
$( document ).keydown(function(e) {
  d = e.keyCode;
  checkCode();
});

function checkCode() {
	if (level === 1 && d === 39 && sword === false ) {
	  	$('#wood').html('you get eaten by an ogre, you failed');
	  	loadCanvas('ogre');
	  	setTimeout(
	  		function () { location.reload(); },
	  		1000
	  	);

	  }
	else if (level === 1 && d === 39 && sword === true) {
		$('#wood').html('You slay the ogre and get some money');

	}
	if (d === 37) {
		level=2;
		$('#wood').html('you meet a dwarf and he gives you a sword! You can now go back');
		sword = true;

	}
	if (d === 40 ) {
		level=1;
		$('#wood').html('You are in a dark wood choose left or right');
	}
}
