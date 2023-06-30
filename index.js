var totalButtons=document.querySelectorAll("button").length;
for(var i=0;i<totalButtons;i++)
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       var keyPressed=this.innerHTML.toLowerCase();
       playCorrectSound(keyPressed); 
       animateButton(keyPressed);
    });

document.addEventListener("keypress",function(event){
    var keyPressed=event.key.toLowerCase();
    playCorrectSound(keyPressed); 
    animateButton(keyPressed);
});

function playCorrectSound(c){
    switch(c){
        case "w":
            var soundEffect= new Audio("sounds/crash.mp3");
            soundEffect.play();
            break;
        case "a":
            var soundEffect= new Audio("sounds/kick-bass.mp3");
            soundEffect.play();
            break;
        case "s":
            var soundEffect= new Audio("sounds/snare.mp3");
            soundEffect.play();
            break;
        case "d":
            var soundEffect= new Audio("sounds/tom-1.mp3");
            soundEffect.play();
            break;
        case "j":
            var soundEffect= new Audio("sounds/tom-2.mp3");
            soundEffect.play();
            break;
        case "k":
            var soundEffect= new Audio("sounds/tom-3.mp3");
            soundEffect.play();
            break;
        case "l":
            var soundEffect= new Audio("sounds/tom-4.mp3");
            soundEffect.play();
            break;
        default:
            alert("Please press correct key !!");
   } 
}

function animateButton(c){
    var keyPressed=document.querySelector("."+c);
    keyPressed.classList.add("animate");
    setTimeout(function(){
        keyPressed.classList.remove("animate");
    },250);
}