function calculate () {
	var t = widthbox.value; 
	
	var w = document.getElementById("widthbox").value;
	var l = document.getElementById("lenghtbox").value;
	var h = document.getElementById("heightbox").value;
	
	w = parseFloat(w);
	l = parseFloat(l);
	h = parseFloat(h);
	
	var result = w*l*h;
	
	document.getElementById("result").innerHTML = result;
}