
var d;
var level = 1;
var hasSword = false;
var hasMoney = false;
var ogre = 'ogre.jpg';
var dwarf = 'dwarf.jpg';
var money = 'money.jpg';
var woods = 'woods.jpg';
var sword = 'sword.jpg';

//create the canvas element
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas); 


//Lets make a way to load an image onto the canvas
function loadCanvas (dataURL,x,y,w,h) {
	var imageObj = new Image();
	imageObj.onload = function () {
		console.log(imageObj);
		ctx.drawImage(imageObj,x,y,w,h);
	};
	imageObj.src = dataURL;
	//console.log(imageObj);
}

//Lets add the keyboard controls now
$( document ).keydown(function(e) {
  d = e.keyCode;
  checkCode();
  //console.log(d);
});

//lets make some routes through the game so you can meet the different characters
function checkCode() {
	if (hasSword === false && level === 1 && d === 39 ) {
	  	$('#wood').html('you get eaten by an ogre, you failed');
	  	loadCanvas(ogre,530, 280, 50, 50);
	  	setTimeout(
	  		function () { location.reload(); },
	  		1000
	  	);

	 }
	else if (level === 1 && d === 39 && hasSword === true) {
		level = 2;
		$('#wood').html('You slay the ogre and get some money');
		hasMoney = true;
		loadCanvas(money, 50, 20, 50, 50);
		loadCanvas(ogre,530, 280, 50, 50);
	}
	if (d === 37 && level === 1 && hasMoney === false ) {
		level=2;
		hasSword = true;
		$('#wood').html('you meet a dwarf and he gives you a sword! You can now go back');
		loadCanvas(sword, 110, 20, 50,50);
		loadCanvas(dwarf, 200, 350, 50,50);


	}
	else if (level === 1 && d === 37 && hasMoney === true) {
		level=2;
		$('#wood').html('you pay the dwarf back');
		loadCanvas(dwarf, 200, 350, 50,50);
	}
	if (d === 40 ) {
		level=1;
		$('#wood').html('You are in a dark wood choose left or right');
		loadCanvas(woods, 0,0,800,600);
	}
}

//Start the game by loading the woods
$('#wood').html('You are in a dark wood choose left or right');
loadCanvas(woods,0,0,800,600);
