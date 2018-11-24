function generateWord() {
	var randoNum = Math.floor(Math.random() * 5);
	var randoNum2 = Math.floor(Math.random() * 5);
	var nounPicks = [" water", " bowl", " shark", " snowboard", " shirt"];
	var adjPicks = ["beautiful", "tiny", "broken", "large", "black"];
	document.getElementById("output").innerHTML += "What a " + adjPicks[randoNum] + nounPicks[randoNum2] + "!<br/>";
}
