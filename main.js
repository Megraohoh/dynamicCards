var cardArea = document.getElementById("cardArea");
var inputArea = document.getElementById("inputArea");
var createBtn = document.getElementById("createBtn");
var deleteBtn = document.getElementById("deleteBtn");
var identifier = 0;


function writeToDom(){
	if(inputArea !=="")	{
		var createCard = "";
		createCard += `<div class="cardArea" id="newCard-${identifier}">`;
		createCard += `<h3>Oh look, your card!!</h3>`;
		createCard += `<img src="http://cdn.someecards.com/someecards/usercards/programmer-n-proh-gram-er-an-organism-that-turns-caffeine-and-pizza-into-software-8a828.png" alt="someecards programmer joke">`;
		createCard += `<h3> ${inputArea.value}</h3>`;
		createCard += `<button class="btn deleteBtn">Delete</button>`;
		createCard += `</div>`;
		cardArea.innerHTML += createCard;
		identifier += 1;
	} else {
		alert("Hey! Add some input to generate the card!")
	}	
}

createBtn.addEventListener("click", writeToDom);

deleteBtn.addEventListener("click", deleteCard);

function deleteCard(e) {
// console.log("working", deleteCard);
	if (event.target.classList === "deleteBtn"){
		event.target.parentNode.remove();	
	}

}















