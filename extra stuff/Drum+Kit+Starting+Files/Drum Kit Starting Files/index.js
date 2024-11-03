var l= document.getElementsByClassName("drum").length;
for (var i=0;i<l;i++){
    document.getElementsByClassName("drum")[i].addEventListener("click",onClick);
}
document.addEventListener("keydown", function (event){
    //alert("Hi");
    //console.log(event);
    onClick2(event.key);
    buttonAnimation(event.key)
});
function onClick(){
    var j=this.innerHTML;
    buttonAnimation(j);
    var audio;
    switch(j){
        case "w":
            audio = new Audio("sounds/agent.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            break;
    }
    //var audio = new Audio("sounds/tom-1.mp3");
    //this.style.color="white";
    audio.play();
    
      
}

function onClick2(a){
    var j=a;
    var audio;
    switch(j){
        case "w":
            audio = new Audio("sounds/agent.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            break;
    }
    //var audio = new Audio("sounds/tom-1.mp3");
    //this.style.color="white";
   // document.getElementsByClassName(a)[0].style.color="white";
    audio.play();
    
      
}
function buttonAnimation(k){

    var a=document.querySelector("."+k);
    a.classList.add("pressed");

    setTimeout(function(){a.classList.remove("pressed")},10);
}