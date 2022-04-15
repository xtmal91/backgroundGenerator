// JavaScript for JS+DOM


//Example done in course video
// var button = document.getElementsByTagName("button")[0]

// button.addEventListener("click", function() {
// 	console.log("CLICK!!!");
// })

//made in course video//
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelectorAll("ul")[0];

// Variables made by me.//
var ulById = document.getElementById("uList")
var done = document.querySelectorAll("li");
var delButton = document.querySelectorAll(".delete")
var divWrap = document.querySelectorAll(".wrap")
var divArray = Array.from(divWrap);
var delButtonArray = Array.from(delButton);
var divArrayLength = divArray.length;
// var container = document.querySelector(".container");
var delButtonArrayLength = delButtonArray.length;

//Not sure why I made these variables//
var emojis = document.getElementById("emoji")
var hello = document.getElementById("helloWorld");

//variables I didnt use//
// var items = document.getElementsByClassName("done");
// var zero = document.querySelectorAll("li")[0];
// var doneLength = done.length;
// var delButton = document.querySelectorAll(".delete"); 






function inputLength() {
	return input.value.length
	console.log(input.value.length);
}


// ~~*made by me during exercises 1 and 3 so far*~~
function createDivWrapper() {
	var divWrap = document.querySelectorAll(".wrap")
	divWrap = document.createElement("div");
	ul.appendChild(divWrap);

	var firstDiv = document.querySelectorAll("div")[0];
	var secondClassName = firstDiv.classList[1];

	divWrap.classList.add("wrap");
	divWrap.classList.add("number");
	

	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		divWrap.appendChild(li);
		li.classList.add("listItem")
		li.addEventListener("click", function() {
			li.classList.toggle("done")
		})
		var delButtonAdd = document.createElement("button");
	delButtonAdd.appendChild(document.createTextNode("Delete"));
		divWrap.appendChild(delButtonAdd);
		delButtonAdd.classList.add("delete");
		delButtonAdd.addEventListener("click", function() {
			if (event.target.parentElement.parentElement === ul) {
				ul.removeChild(divWrap);
			}
			
		} )
		
		input.value = "";
}

// function addNumToClassList() {
// 	var numberV = document.getElementById("uList").getElementsByClassName("number")[0];
// 	var numberClassToNumber = numberV.setAttribute
// }


//~~*next 2 functions were made during course but then altered by me.*~~
function addListAfterClick() {
	if (inputLength() > 0) {
		// createListElement()
		// createButtonElement()    
		createDivWrapper()
	} 
}

function addListAfterKeydown(e) {
	if (inputLength() > 0 && e.key === "Enter") {
		// createListElement()
		// createButtonElement()
		createDivWrapper()
		
	}
}


//~~*From course. Creating LI element*~~
// function createListElement() {
// 	var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
	
// 		// li.classList.add("done") we want the items to not have done class on refresh.
// 		li.addEventListener("click", function() {
// 			li.classList.toggle("done")
// 		})

// 		input.value = "";
// }

// function createButtonElement() {
// 	var delButton = document.createElement("button");
// 	delButton.appendChild(document.createTextNode("Delete"));
// 		ul.appendChild(delButton);
// }

//from course
button.addEventListener("click", addListAfterClick); 

input.addEventListener("keydown", addListAfterKeydown);  




// making list items clickable to toggle .done class for line-through
function doneToggle(eachItem) {
	eachItem.addEventListener("click", function() {
		eachItem.classList.toggle("done");
})
}	

done.forEach(doneToggle); 


// Variables for Exercise 2 after event.target.parentElement//
//Below code is for Exercise 2//
var divParent = document.getElementById("uList").getElementsByTagName("div")[0];
var buttonChild = divParent.getElementsByTagName("button")[0];
var listChild = divParent.getElementsByTagName("li")[0];
var divParentTwo = document.getElementById("uList").getElementsByTagName("div")[1];
var buttonChildTwo = divParentTwo.getElementsByTagName("button")[0];
var listChildTwo = divParentTwo.getElementsByTagName("li")[0];


buttonChild.addEventListener("click", function(x) {
	if (event.target.parentElement === divParent) {
		divParent.removeChild(listChild);
		divParent.removeChild(buttonChild);
	} else (alert("You Suck!!"))
});

buttonChildTwo.addEventListener("click", function(x) {
	if (event.target.parentElement === divParentTwo) {
		divParentTwo.removeChild(listChildTwo);
		divParentTwo.removeChild(buttonChildTwo);
	} else (alert("You Suck Two!!"))
});

// delButton.forEach(function delButtonEvent(i) {
// 	i.addEventListener("click", function(x) {
// 		return(i);
// 	})
// });


// delButton.forEach(delButtonEvent);

// function delButtonEvent(i) {
// 	i.addEventListener("click", function(x) {
		
// 	})
// };

// var zero = document.getElementsByClassName("0")[0];












//most of whats below is me trying to solve exercise 2.


// done.addEventListener("click", doneToggle);

// done.addEventListener("keydown", doneToggle);

// divArray.indexOf(i)

// function findDivIndex() {
// 	divArray.indexOf()
// }

// function findButtonIndex(bElement, y) {
// 	var buttonIndex = (y)
// 	console.log("buttonIndex")
// // 	if (0 < delButtonArrayLength) {
// // 		console.log(buttonIndex)
// // 	} else (alert("not working"))
// // 	// console.log("hi")
// }

// // findButtonIndex()

// delButtonArray.forEach(findButtonIndex);


// function removeDivWrap() {
// 	var divWrap = document.querySelectorAll(".wrap");
// 	// var divArrayIndex = divArray.findIndex(".wrapperOne")
// 	for (var i = 0; i < divArrayLength; i++) {
		
// 		console.log(i)
// 	}
// 	// var divArrayIndex = [i];
// 	// for (var x = 0; i < delButtonArrayLength; i++) {
// 	// 	var delButtonArrayIndex = [i];
// 	// }
// 	// if (divArrayIndex === delButtonArrayIndex) {
// 	// 	// 	// divArray.remove(i)
// 	// 		console.log("hello");
// 	// 	}
// 	console.log("hello");



// 	// var wrapperOne = document.querySelectorAll(".wrapperOne")
// 	// var container = document.querySelector(".container");
// 	// wrapperOne.outerHTML = "";
// 	// divArray.parentNode.removeChild(divArray);
// 	// console.log("hello");
// }

// for (var i = 0; i < delButtonArrayLength; i++) {
// 	delButtonArray[i].addEventListener("click", findButtonIndex)
// }



// function divArrayLengthTwo() {
// 	return divArray.indexOf(divArray)
// }

// var divIndex = divArray.indexOf("divArray")

// function giveIndexNumber() {
// 	console.log("hello")
// }

// delButton.addEventListener("click", function() {
// 	console.log("hello")
// });

// divArray.indexOf(".wrap")


// function removeDivWrap(div, i) {
// 	var divArray = Array.from(divWrap);
// 	var divArrayLength = divArray.length;
// 	div.addEventListener("click", function() {
// 		for (var i = 0; i < divArray.length; i++) {
// 			if (divArrayLength >= [i] ) {	
// 			console.log("hello")
// 		}
		

// 		}

// 	})
	
// }


// delButton.forEach(removeDivWrap, i);

// delButton.addEventListener("click", removeDivWrap);




//things I tried but didn't work from exercise 1 and 3

// adding done class to new list items
// function addDoneClass(a) {
// 		done.forEach(function(a) {
// 		a.addEventListener("click", function() {
// 		a.classList.toggle("done");
// 	})
// 	})
// }
//this didnt work, it gives an error saying it cant read the toggle 
//see notes on this exercise to see more about why it didnt work




// for (var i = 0; i < doneLength; i++) {
// 	done[i].addEventListener("click", function() {
// 		done.classList.toggle("done");
// 	})
// }


// done.addEventListener("click", function() {
// 	for (var i = 0; i < done.length; i++) {
// 		done.classList.toggle("done");
// 	}
// })

// var listItems = document.querySelectorAll("li");
// var listItems = document.getElementsByClassName("done");

// function itemClick() {
	// var listItems = document.getElementsByClassName("done");
	// listItems.className = "done"
	// listItems.classList.toggle("done");
// }


// listItems.addEventListener("click", function;



// function listClick() {
// 	document.getElementsByClassName("done").style
// }



// else {
// 		alert("Please Enter Text")
// 	} 

