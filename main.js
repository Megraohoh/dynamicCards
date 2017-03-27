var containerDiv = document.getElementById("container");
var inputArea = document.getElementById("inputArea");
var createBtn = document.getElementById("createBtn");
var identifier = 0;

function writeToDom(){
	identifier += 1
	var createCard = "";

	createCard += `<div class="cardArea" id="newCard-${identifier}">`;
	createCard += `<h3>Oh look, your card!!</h3>`;
	createCard += `<img src="http://cdn.someecards.com/someecards/usercards/programmer-n-proh-gram-er-an-organism-that-turns-caffeine-and-pizza-into-software-8a828.png" alt="someecards programmer joke">`;
	createCard += `<h3> ${inputArea.value}</h3>`;
	createCard += `<button class="btn" id="deleteBtn">Delete</button>`;
	createCard += `</div>`;
	containerDiv.innerHTML += createCard;
}

createBtn.addEventListener("click", writeToDom);

document.body.addEventListener("click", function(e) {
	if (event.target.className === "deleteBtn"){
		event.target.parentNode.remove();	
	}

});

console.log("yo", writeToDom);