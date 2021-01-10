
var randomNumber1 = (Math.floor((Math.random() * 6) +1));

var diceimage = "images/dice" + randomNumber1 + ".png";

// var randomdiceimage = "images/"+ diceimage;
// document.querySelector("img1")
var image1 = document.querySelector(".img1");
image1.setAttribute("src", diceimage);


var randomNumber2 = Math.floor((Math.random() * 6) +1);
var secondimage = "images/dice"+ randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", secondimage);

var maxx = Math.max(randomNumber1,randomNumber2);
if(randomNumber1===randomNumber2){
  document.querySelector(".heading").textContent = "Tie try again";
}
else if (maxx == randomNumber1){
  document.querySelector(".heading").textContent = "🍾🏋️‍♀️Player 1 Won";
}else {
  document.querySelector(".heading").textContent = "Player 2 won🍾🏋️‍♂️";
}
