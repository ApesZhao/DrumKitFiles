
var n;

var audiow = new Audio('sounds/tom-1.mp3');
var audioa = new Audio('sounds/tom-2.mp3');
var audios = new Audio('sounds/tom-3.mp3');
var audiod = new Audio('sounds/tom-4.mp3');
var audioj = new Audio('sounds/snare.mp3');
var audiok = new Audio('sounds/crash.mp3');
var audiol = new Audio('sounds/kick-bass.mp3');


for(n=0;n<=document.querySelectorAll(".drum").length;n++){
	document.querySelectorAll(".drum")[n].addEventListener("click",buttonClick);
}


function buttonClick(){

var buttonText=this.innerHTML;

	if (buttonText=="w"){
		//document.querySelector(".w").addEventListener("click",audiow.play());
		this.style.color="white";
		audiow.play();
	}

	else if (buttonText=="a"){
		//document.querySelector(".a").addEventListener("click",audioa.play());
		audiow.play();
	}
	
	else if (buttonText=="s"){
		//document.querySelector(".s").addEventListener("click",audios.play());
		audios.play();
	}
	else if (buttonText=="d"){
		//document.querySelector(".d").addEventListener("click",audiod.play());
		audiod.play();
	}

	else if (buttonText=="j"){
		//document.querySelector(".j").addEventListener("click",audioj.play());
		audioj.play();
	}

	else if (buttonText=="k"){
		//document.querySelector(".a").addEventListener("click",audiok.play());
		audiok.play();
	}


	else {
		//document.querySelector(".l").addEventListener("click",audiol.play());
		audiol.play();
	}

}









// Calculator function, function inside function


function add(num1,num2){

	return num1+num2;
}
function substract(num1,num2){
	
	return num1-num2;
}
function mulitply(num1,num2){
	
	return num1*num2;
}

function divide(num1,num2){
	
	return num1/num2;
}

function calculator(num1,num2,operator){
	
	return operator(num1,num2);
}
