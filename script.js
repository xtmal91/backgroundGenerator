// Javascript for Background Generator //


var css = document.getElementsByClassName("h3One")[0];
var cssTwo = document.getElementsByClassName("h3Two")[0];
var cssThree = document.getElementsByClassName("h3Three")[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color1Value = color1.value;
var color2Value = color2.value;
var body = document.getElementById("gradient");
var test = document.querySelector("h4");
var random = document.getElementById("random");
var one = document.getElementById("one");
var two = document.getElementById("two");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

function showHex() {
	cssTwo.textContent = color1.value;
	cssThree.textContent = color2.value;
}

showHex();


function setInputValue() {
	color1.setAttribute("value", color1.value)
	color2.setAttribute("value", color2.value)
}

setInputValue();


color1.addEventListener("input", setGradient)
color1.addEventListener("input", showHex) 
color2.addEventListener("input", setGradient)
color2.addEventListener("input", showHex)


function testing() {
	test.textContent = "Click Random To" 
	+ " Generate Random Colors!!";
}

test.addEventListener("click", testing)


function randomRGBOne() {
	var one = document.getElementById("one");
	var x = Math.round(Math.random()*256);
	var y = Math.round(Math.random()*256);
	var z = Math.round(Math.random()*256);
	var RGBColor = "rgb(" + x + "," + y + "," + z + ")";

	one.textContent = RGBColor + ";";
}

function randomRGBTwo() {
	var two = document.getElementById("two");
	var x = Math.round(Math.random()*256);
	var y = Math.round(Math.random()*256);
	var z = Math.round(Math.random()*256);
	var RGBColor = "rgb(" + x + "," + y + "," + z + ")";

	two.textContent = RGBColor + ";";
}

// randomRGBOne();

// randomRGBTwo();

random.addEventListener("click", randomRGBOne);
random.addEventListener("click", randomRGBTwo);


























//everything below was from the first time I did this slide.
//Then I got derailed because of work bullshit and now im redoing the slide.


// color1.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right, "color1.value", "color2.value")";
// })



// // console.log(" + color3 + ", " + color4 + ");





// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// }


// color1.addEventListener("input", setGradient)

// color2.addEventListener("input", setGradient)





// "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";