var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageLink1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").src = imageLink1;

var randomNumber2 = Math.ceil(Math.random()*6);
var imageLink2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").src = imageLink2;

if(randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].textContent = "Player 2 wins!🚩";
} else if(randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].textContent = "🚩Player 1 wins!";
} else {
    document.getElementsByTagName("h1")[0].textContent = "Draw!";
}
