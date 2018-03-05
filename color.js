var sqaurenumber = 6;
var color_array= colorArrayGenerator(sqaurenumber);
var squareclass = document.querySelectorAll(".square");
var chosenColor = selectcolor();
var par_color = document.getElementById("guesscolor");
var header = document.querySelector("h1");
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var easybtn= document.getElementById("easyBtn");
var hardbtn= document.getElementById("hardBtn");

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	sqaurenumber=6
	color_array= colorArrayGenerator(sqaurenumber);
	chosenColor = selectcolor();
	message.textContent="Play!"
	header.style.background="teal"
	par_color.textContent=chosenColor;
	for(var i = 0; i < squareclass.length; i++) {
			squareclass[i].style.background = color_array[i];
			squareclass[i].style.display = "block";
		}
})

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	sqaurenumber=3;
	color_array= colorArrayGenerator(sqaurenumber);
	chosenColor = selectcolor();
	par_color.textContent=chosenColor;
	message.textContent="Play!"
	header.style.background="teal"
	for(var i = 0; i < squareclass.length; i++) {
		if(color_array[i]) {
			squareclass[i].style.background = color_array[i];
		} else {
			squareclass[i].style.display = "none";
		}
	}

})






reset.addEventListener("click",function(){

message.textContent="Play!";
header.style.background="teal";
reset.textContent="New Colors";

color_array= colorArrayGenerator(sqaurenumber);
chosenColor = selectcolor();
for (var i = 0; i < squareclass.length; i++){

	squareclass[i].style.background = color_array[i];

}
})

par_color.textContent=chosenColor;
for (var i = 0; i < squareclass.length; i++){

	squareclass[i].style.background = color_array[i];

	squareclass[i].addEventListener("click",function(){

		var clickedColor = this.style.background;
		if(clickedColor === chosenColor){
			changecolor(chosenColor);
			header.style.background= clickedColor;
			message.textContent = "Correct"
			reset.textContent="Play Again?";

		}
		else{
			message.textContent="Try Again"
			this.style.background="#000000";
		}
	})
}

function changecolor(color){
	for (var i = 0; i < squareclass.length; i++) {
		squareclass[i].style.background = color;		

		}
}
function selectcolor(){

	return color_array[Math.floor(Math.random()*color_array.length)]

}

function colorArrayGenerator(num){
	var array=[];
	for (var i = 0; i<num ; i++) {
		
		array.push(randomColor());
		
	}
	return array;
}

function randomColor(){

	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}