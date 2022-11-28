
var totalButtons=document.querySelectorAll(".drum").length;


for(var i=0 ; i<totalButtons ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    this.style.color="#2d545e";
    var buttonHTML=this.id;
    makeSound(buttonHTML);
    activateButton(buttonHTML);
  }
)
}
var tom1= new Audio("sounds/music-1.mp3");
var tom2= new Audio("sounds/music-2.mp3");
var tom3= new Audio("sounds/music-3.mp3");
var tom4= new Audio("sounds/music-4.mp3");
var snare= new Audio("sounds/music-5.mp3");
var crash= new Audio("sounds/music-6.mp3");
var kick= new Audio("sounds/music-7.mp3");

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  activateButton(event.key);
})

function makeSound(key) {

  switch (key) {
  case "v":

  tom1.play();
  break;

  case "a":

  tom2.play();
  break;

  case "r":

  tom3.play();
  break;

  case "d":

  tom4.play();
  break;

  case "h":

  snare.play();
  break;

  case "A":

  crash.play();
  break;

  case "n":

  kick.play();
  break;

  default: console.log(buttonHTML);

  }

}

function activateButton(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
function pause() {
  tom1.pause();
  tom2.pause();
  tom3.pause();
  tom4.pause();
  snare.pause();
  crash.pause();
  kick.pause();
  console.log("I got clicked");
}
