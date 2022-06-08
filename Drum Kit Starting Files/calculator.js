

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

// 8/06/2022
//Constructor Function (function name needs to be capitalised)

function BellBoy(name,age,hasWorkPermit,language){
	this.name=name;
	this.age=age;
	this.hasWorkPermit=hasWorkPermit;
	this.language=language;
	
	//including a function
	this.moveSuitcase=function(){
		alert("May I take your suitcase?");
		pickUpSuitcase();
		move();
		
	}
	
}

//Initialise Objects:
var bellBoy1 = new BellBoy("Timmy",19,true,["Chinese","English"]);

//using the function in constructor function
//bellBoy1.moveSuitcase();




//Creating a housekeeper constructor function

function HouseKeeper(name, yearsOfExp, cleaningRepertoire){
	
	this.name=name;
	this.yearsOfExp=yearsOfExp;
	this.cleaningRepertoire=cleaningRepertoire;
	this.cleaning=function(){
		alert("Cleaning starts");
		
	}
}
//creating a new housekeeper obj
var housekeeper1=new HouseKeeper("Fiona", 5, ["Rooms","dirty rooms"]);
///console.log(housekeeper1.name);
//housekeeper1.cleaning();
