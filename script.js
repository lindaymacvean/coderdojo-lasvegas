
var d;
var level = 1;
var sword = false;
var money = false;
var ogre = 'ogre.jpg';
var dwarf = 'dwarf.jpg';
var gold = 'money.jpg';
var woods = 'woods.jpg';

$('#wood').html('You are in a dark wood choose left or right');

var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

function loadCanvas (dataURL) {
	var imageObj = new Image();
	if (dataURL === ogre ) {
		imageObj.onload = function() {
			ctx.drawImage(this,480,270,50,50)
		};
	}
	else {
		imageObj.onload = function() {
			ctx.drawImage(this,0,0)
		};
	}
	imageObj.src = dataURL;
}
loadCanvas(woods);

//Lets add the keyboard controls now
$( document ).keydown(function(e) {
  d = e.keyCode;
  checkCode();
  console.log(d);
});

function checkCode() {
	if (sword === false && level === 1 && d === 39 ) {

	  	$('#wood').html('you get eaten by an ogre, you failed');
	  	loadCanvas(ogre);
	  	setTimeout(
	  		function () { location.reload(); },
	  		1000
	  	);

	 }

	else if (level === 1 && d === 39 && sword === true) {
		level = 2;
		$('#wood').html('You slay the ogre and get some money');
		money = true;
		loadCanvas(gold);
	}
	if (d === 37 && level === 1 && money === false ) {
		level=2;
		sword = true;
		$('#wood').html('you meet a dwarf and he gives you a sword! You can now go back');
		loadCanvas(dwarf);
	}
	else if (level === 1 && d === 37 && money === true) {
		level=2;
		$('#wood').html('you pay the dwarf back');
		loadCanvas(dwarf);
	}
	if (d === 40 ) {
		level=1;
		$('#wood').html('You are in a dark wood choose left or right');
		loadCanvas(woods);
	}
}
