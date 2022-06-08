
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
	
	
}



// 8/06/2022
//Constructor Function (function name needs to be capitalised)

function BellBoy(name,age,hasWorkPermit,language){
	this.name=name;
	this.age=age;
	this.hasWorkPermit=hasWorkPermit;
	this.language=language;
	
}

//Initialise Objects:
var bellBoy1 = new BellBoy("Timmy",19,true,["Chinese","English"]);


//Creating a housekeeper constructor function

function HouseKeeper(name, yearsOfExp, cleaningRepertoire){
	
	this.name=name;
	this.yearsOfExp=yearsOfExp;
	this.cleaningRepertoire=cleaningRepertoire;
}
//creating a new housekeeper obj
var housekeeper1=new HouseKeeper("Fiona", 5, ["Rooms","dirty rooms"]);
console.log(housekeeper1.name);

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
;
}
