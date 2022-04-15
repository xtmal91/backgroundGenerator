// Javascript for Background Generator //


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var test = document.querySelector("h4");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function testing() {
	test.textContent = "Hellooo World!!!";
}

test.addEventListener("click", testing)





color1.addEventListener("input", setGradient) 

color2.addEventListener("input", setGradient)




























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