var button = document.getElementById('submit');
var confirm = document.getElementById('confirm');
var decline = document.getElementById('decline');
var up = document.getElementById('up'); 

function calculate() {
var weight = document.getElementById('bodyWeight').value;
var age = document.getElementById('age').value;
var height = document.getElementById('height').value;
var goal = document.getElementById('goal').value;
var time = document.getElementById('days').value;
var sex = document.getElementById('sex').value;
var activity = document.getElementById('activity').value;
var text =document.getElementById('activity').options[document.getElementById('activity').selectedIndex].text;
	if (weight == "") {
		alert("Please Enter a Weight")
	}else if (goal == "") {
		alert("Please Enter a Goal Weight")
	}else if (time == 0) {
		alert("Please Select a Time Frame")
	}else if (activity == 0) {
		alert("Please Select an Activity Level")
	}else if (sex == 0) {
		alert("Please Select a Gender")
	}else if (height == "") {
		alert("Please Enter a Height")
	}else if (age == "") {
		alert("Please Enter an Age")
	}else {
		document.getElementById("stats").className = "";
		document.getElementById("stats").className = "col-sm-12 fader";
		document.getElementById("weight").textContent = weight + " lbs";
		document.getElementById("howMuch").textContent = goal + " lbs";
		document.getElementById("time").textContent = time + " Days";
		document.getElementById("active").textContent = text;
		$('html, body').animate({
		    scrollTop: $("#stats").offset().top
		}, 1500);
	};
};

function correct(){	
	var weight = document.getElementById('bodyWeight').value;
	var age = document.getElementById('age').value;
	var height = document.getElementById('height').value;
	var goal = document.getElementById('goal').value;
	var time = document.getElementById('days').value;
	var sex = document.getElementById('sex').value;
	var activity = document.getElementById('activity').value;
	var centimeters = height * 2.54;
	var kg = weight * .453592;
	var result;
	var basal;
	if (sex == "true") {
		basal = Math.round(10 * kg + 6.25 * centimeters - 5 * age + 5);
	}else {
		basal =  Math.round(10 * kg + 6.25 * centimeters - 5 * age - 161);
	};
	
	
	if (weight >= goal) {
		result =  (((basal * activity) * time) - ( 3500 * (weight - goal) ) ) / time;
		console.log("LOSE");
	}else {
		result = (((basal * activity) * time) + ( 3500 * (goal - weight) ) ) / time;
		console.log("Gain");
	}
	
	
	console.log(result);
	document.getElementById("calories").className = "";
	document.getElementById("calories").className = "col-sm-12 fader";
	if (sex == "true" & result <= 1000 || sex == "false" & result <= 800) {
		document.getElementById("valid").className = "hide"
		document.getElementById("gainz").textContent = "Your Goal is Very Unrealistic.";
		document.getElementById("gainz2").textContent = "Please Select Another Time Frame";
		document.getElementById("gainz").className = "text-center";
		document.getElementById("gainz2").className = "text-center";
		up.className = "";
		up.className = "btn green center-block";
	}else {
		document.getElementById("valid").className = "title"
		document.getElementById("gainz").className = "";
		document.getElementById("gainz2").className = "hide";
		document.getElementById("gainz").textContent = Math.round(result) + " Calories Per Day";
		document.getElementById("cal").textContent = basal + " Calories";
		document.getElementById("burned").textContent = Math.round(basal * activity) + " Calories";
		up.className = "hide";
	}
	$('html, body').animate({
	    scrollTop: $("#calories").offset().top
	}, 1500);
};

button.onclick = function() {calculate(); console.log("Ayy")};

decline.onclick = function() {$('html, body').animate({
    scrollTop: $(".anch").offset().top
}, 1000);
	document.getElementById("stats").className = "hide";
};
up.onclick = function() {$('html, body').animate({
    scrollTop: $(".anch").offset().top
}, 1000);
};

confirm.onclick = function() {correct(); console.log("confirm")
	


};