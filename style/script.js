var title = ["Found Something in the City","Anyone Lost This?","FOUND ITEM","Dont Worry Your Item is Safe", "I bet someone is going crazy for this", "BE RESPONSIBLE! JEEZ."];
var randomTitle = title[Math.floor(Math.random() * 6)];
document.getElementById('head3').innerText = randomTitle;

document.getElementById('claimButton').addEventListener("click", function () {
	alert("Thanks for claiming the item!, We will get back to you, shortly :) ");  
   
} );