function registerHandlers(){
	document.getElementById("go").onclick = getBox;
	document.getElementById("average").onclick = getAverage;
}

function randoColor() {
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
    	color += letters[Math.floor(Math.random() * 16)];
    }	
    return color;
}

var clickedTime;
var createdTime;
var reactionTime;
var name;
var times = [];
var timeCounter = 0;

function getBox() {
	var time = Math.random();
    time = time*5000;
    var number = Math.floor((Math.random() * 45) + 1);
    name = "box" + number;
    setTimeout(function() {
    			document.getElementById(name).style.backgroundColor = randoColor();
    			document.getElementById(name).style.visibility = "visible";
    			createdTime=Date.now();
    }, time);

    document.getElementById(name).onclick = function() {
		clickedTime = Date.now();
		reactionTime = (clickedTime-createdTime)/1000;
		times[timeCounter] = reactionTime;
		timeCounter++;
		alert(reactionTime + " seconds! Press start to give it another go! Or click See Average to view your average reaction time!");
		document.getElementById(name).style.visibility = "hidden";
	}
}

function getAverage() {
	var total = 0;
	for(x = 0; x < times.length; x++) {
		total += times[x];
	}
	
	var average = (total/times.length);
	alert("Your current average reaction time is: " + average.toFixed(3) + "!");
}
    
