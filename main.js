canvas = document.getElementById("superman");
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() *3);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 50;
rover_y = 50;



function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",batiman);
function batiman(a){
holiwis=a.keyCode;
console.log(holiwis);
if(holiwis=="38"){
up();
console.log("up")
}
if(holiwis=="40"){
down();
}
if(holiwis=="39"){
right();
}
if(holiwis=="37"){
left()
}
}




function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=700)
	{
		rover_y = rover_y + 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >=0)
	{
		rover_x = rover_x - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_x);
		 uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <=800)
	{
		rover_x = rover_x + 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_x);
		 uploadBackground();
		 uploadrover();
	}
}
