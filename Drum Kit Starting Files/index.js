
var n;

var audiow = new Audio('sounds/tom-1.mp3');
var audioa = new Audio('sounds/tom-2.mp3');
var audios = new Audio('sounds/tom-3.mp3');
var audiod = new Audio('sounds/tom-4.mp3');
var audioj = new Audio('sounds/snare.mp3');
var audiok = new Audio('sounds/crash.mp3');
var audiol = new Audio('sounds/kick-bass.mp3');


//key down event added 8/06/2022
//detecting key pressed
document.addEventListener("keydown",respondToKey);

function respondToKey(event) {

		switch(event.key){
		case "w":
		audiow.play();
		break;
		
		case "a":
		audioa.play();
		break;
				
		case "s":
		audios.play();
		break;
		
		case "d":
		audiod.play();
		break;
		
		case "j":
		audioj.play();
		break;
		
		case "k":
		audiok.play();
		break;
		
		case "l":
		audiol.play();
		break;
		
		default:
		alert("Only press the buttons on screen!");
		
	}
	
		buttonAnimation(event.key);
}

//detecting window button
for(n=0; n<=document.querySelectorAll(".drum").length; n++){
	document.querySelectorAll(".drum")[n].addEventListener("click", buttonClick);
}


function buttonClick(){

//7/06/2022
//var buttonText=this.innerHTML;
/*
	if (buttonText=="w"){
		
		this.style.color="white";
		audiow.play();
	}

	else if (buttonText=="a"){
		
		this.style.color="white";
		audiow.play();
		
	}
	
	else if (buttonText=="s"){
		
		this.style.color="white";
		audios.play();
	}
	else if (buttonText=="d"){
		
		this.style.color="white";
		audiod.play();
	}

	else if (buttonText=="j"){
		
		this.style.color="white";
		audioj.play();
	}

	else if (buttonText=="k"){
		
		this.style.color="white";
		audiok.play();
	}


	else {
		
		this.style.color="white";
		audiol.play();
	}
*/

//8/06/2022 using switch for different cases
	switch	(this.innerHTML){
		case "w":
		audiow.play();
		break;
		
		case "a":
		audioa.play();
		break;
				
		case "s":
		audios.play();
		break;
		
		case "d":
		audiod.play();
		break;
		
		case "j":
		audioj.play();
		break;
		
		case "k":
		audiok.play();
		break;
		
		case "l":
		audiol.play();
		break;
		
		default:
		alert(this.innerHTML);
		
	}
	buttonAnimation(this.innerHTML);
	
}

function buttonAnimation(currentKey) {

    //the button we want to change the style
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){

    activeButton.classList.remove("pressed");

    },100);

}




