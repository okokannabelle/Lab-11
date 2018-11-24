function generateNum(){
	var userEntered =parseFloat(document.getElementById("numInput").value);
	for (a = 0; a <= userEntered; a++){
	document.getElementById("output").innerHTML += a + "</br>";
	console.log(a);
	}


}
