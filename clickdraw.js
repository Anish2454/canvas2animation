
/* var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");
var canvas = document.getElementById("canvas"); */
var animateButton = document.getElementById("animate");
var stopButton = document.getElementById("stop");
var ctx = canvas.getContext("2d");
var state = 0;
var first = true;
var radius = 1;
var increment= 1;
var animating = false;
var id = null;

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
  ctx.arc(300, 300, radius, 0, Math.PI * 2, true);
  ctx.fill();
	id = window.requestAnimationFrame(drawDot);
};

var animateButtonFunc = function(e){
	ctx.fillStyle = "green";
	if (!animating){
		animating = true;
		id = window.requestAnimationFrame(drawDot);
	}
};

var stopFunc = function(e){
	window.cancelAnimationFrame(id);
	ctx.clearRect(0,0,600,600);
	id = null;
	animating = false;
}
// var drawFuncs = [drawRedCircle, drawBlueSquare];
//toggle.addEventListener("click", toggleButton);
//canvas.addEventListener("click", pickFunc);
animateButton.addEventListener("click", animateButtonFunc);
stopButton.addEventListener("click", stopFunc);
//clear.addEventListener("click", clearButton);
