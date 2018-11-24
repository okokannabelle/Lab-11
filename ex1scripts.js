var colorPicker = ["red", "green", "blue", "yellow"];
var otherArray = new Array();

function startGame() {
	var randoNum = Math.floor(Math.random() * 4);
	otherArray.unshift(colorPicker[randoNum]);
	document.getElementById("simonSays").innerHTML = "Simon Says:" + colorPicker[randoNum];
	setTimeout(changeCol, 500);

	}

function changeCol() {
	document.getElementById("simonSays").innerHTML = "Simon Says:";
}

function redButton() {

	var red = "red";
	if (red == otherArray[0]){
	startGame();
	}
	else {
	document.getElementById("simonSays").innerHTML = "Simon Says: " + otherArray;
	}
}

function greenButton() {

	var green = "green";
	if (green == otherArray[0]){
	startGame();
	}
	else {
	document.getElementById("simonSays").innerHTML = "Simon Says: " + otherArray;
	}
}

function blueButton() {

	var blue = "blue";
	if (blue == otherArray[0]){
	startGame();
	}
	else {
	document.getElementById("simonSays").innerHTML = "Simon Says: " + otherArray;
	}
}

function yellowButton() {

	var yellow = "yellow";
	if (yellow == otherArray[0]){
	startGame();
	}
	else {
	document.getElementById("simonSays").innerHTML = "Simon Says: " + otherArray;
	}
}
