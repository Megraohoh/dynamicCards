var createBtn = document.getElementById("createBtn");
var deleteBtn = document.getElementById("deleteBtn");
var newCard = document.getElementById("newCard");
var counter = 0;


function writeToDom(){
	var inputArea = document.getElementById("inputArea");

		var createCard = "";
		createCard += `<div class="cardArea" id="newCard-${counter}">`;
		createCard += `<h3>Oh look, your card!!</h3>`;
		createCard += `<img src="http://cdn.someecards.com/someecards/usercards/programmer-n-proh-gram-er-an-organism-that-turns-caffeine-and-pizza-into-software-8a828.png" alt="someecards programmer joke">`;
		createCard += `<h3> ${inputArea.value}</h3>`;
		createCard += `<button class="btn" id="deleteBtn-${counter}">Delete</button>`;
		createCard += `</div>`;
		newCard.innerHTML += createCard;
		counter ++;

		
}



function cardBeGone(){
 	if (event.target.id.includes("deleteBtn")){
 		// console.log("yo", event.target.parentNode);
 		newCard.removeChild(event.target.parentNode);	
 	}
};

createBtn.addEventListener("click", writeToDom);
newCard.addEventListener("click", cardBeGone);
















