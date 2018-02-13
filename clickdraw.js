/*
Anish Shenoy
SoftDev2 pd07
K02 -- What is it saving the screen from?
2018-02-08
*/

/* var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");
var canvas = document.getElementById("canvas"); */

var animateDotButton = document.getElementById("animateDot");
var animateMovieButton = document.getElementById("animateMovie");
var stopButton = document.getElementById("stop");
var ctx = canvas.getContext("2d");
var state = 0;
var first = true;
var radius = 1;
var dotIncrement = 1;
var animating = false;
var id = null;
var Xanim = 237;
var Yanim = 395;
var increment = 1;
var dvdXIncrement = 2;
var dvdYIncrement = 2;

/*
var toggleButton = function(e){
	console.log(e);
	state++;
};
var clearButton = function(e){
	console.log(e);
	ctx.clearRect(0,0,600,600);
	first = true;
};

var drawBlueSquare = function(e){
	console.log(e);
	console.log("Blue Square");
	console.log(state);
	ctx.fillStyle = "blue";
	if (first){
		ctx.beginPath();
    first = false;
    console.log("path began");
  }
	var X = e.offsetX;
	var Y = e.offsetY;
	ctx.lineTo(X + 5, Y + 5);
  ctx.stroke();
  ctx.fillRect(X, Y, 10, 10);
};

var drawRedCircle = function(e){
	console.log(e);
	console.log("Red Circle");
	console.log(state);
	ctx.fillStyle = "red";
	if (first){
		ctx.beginPath();
    first = false;
    console.log("path began");
  }
	var X = e.offsetX;
	var Y = e.offsetY;
	ctx.lineTo(X, Y);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(X, Y, 10, 0, Math.PI * 2, true);
  ctx.fill();
	ctx.stroke();
  ctx.moveTo(X, Y);
};
var pickFunc = function(e){
	drawFuncs[state % 2](e);
}; */

var drawDot = function(timestamp){
	if (radius == 100 || radius == 0){
		increment *= -1;
	}
	radius += increment;
	ctx.clearRect(0,0,600,600);
	ctx.beginPath();
  	ctx.arc(200, 300, radius, 0, Math.PI * 2, true);
  	ctx.fill();
	id = window.requestAnimationFrame(drawDot);
};

var animateDotButtonFunc = function(e){
	if (!animating){
		ctx.fillStyle = "green";
		animating = true;
		id = window.requestAnimationFrame(drawDot);
	}
};

var stopFunc = function(e){
	window.cancelAnimationFrame(id);
	ctx.clearRect(0,0,600,600);
	id = null;
	animating = false;
};

var movieBounce = function(timestamp){
	if (Xanim <= 0 || Xanim >= 400 - 100) dvdXIncrement *= -1;
	if (Yanim <= 0 - 20 || Yanim >= 600 - 80) dvdYIncrement *= -1;
	Xanim += dvdXIncrement;
	Yanim += dvdYIncrement;
	ctx.clearRect(0,0,600,600);
	var logo = new Image();
	logo.src = "logo.png";
	ctx.drawImage(logo, Xanim, Yanim, 100, 100);
	/*
	ctx.beginPath();
  	ctx.arc(Xanim, Yanim, 25, 0, Math.PI * 2, true);
  	ctx.fill(); */
	id = window.requestAnimationFrame(movieBounce);
};

var animateMovieButtonFunc = function(e){
	if (!animating){
		ctx.fillStyle = "blue";
		animating = true;
		id = window.requestAnimationFrame(movieBounce);
	}
};
// var drawFuncs = [drawRedCircle, drawBlueSquare];
//toggle.addEventListener("click", toggleButton);
//canvas.addEventListener("click", pickFunc);
animateDotButton.addEventListener("click", animateDotButtonFunc);
animateMovieButton.addEventListener("click", animateMovieButtonFunc);
stopButton.addEventListener("click", stopFunc);
//clear.addEventListener("click", clearButton);
