canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 100;
rover_width = 90;

rover_x = 10;
rover_y = 10;

mars_background_image_array = ["mars_img_1.jpg", "mars_img_2.jpg", "mars_img_3.jpg", "mars_img_4.jpg"];
random_number = Math.floor(Math.random() * 4);
backgroundimg = mars_background_image_array[random_number];
roverimg = "rover.png";

function new_background() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = backgroundimg;


        rover_imgTag = new Image();
        rover_imgTag.onload = uploadrover;
        rover_imgTag.src = roverimg;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var key_down = e.keyCode;
    console.log("key_down");
    if(key_down == '38')
    {
        up();
        console.log("up");
    }
    if(key_down == '40')
    {
        down();
        console.log("down");
    }
    if(key_down == '37')
    {
        left();
        console.log("left");
    }
    if(key_down == '39')
    {
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log("Rover x position =" +rover_x+ "Rover y position =" +rover_y);
        console.log("Up arrow key");
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("Rover x position =" +rover_x+ "Rover y position =" +rover_y);
        console.log("Down arrow key");
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("Rover x position =" +rover_x+ "Rover y position =" +rover_y);
        console.log("Left arrow key");
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log("Rover x position =" +rover_x+ "Rover y position =" +rover_y);
        console.log("Right arrow key");
        uploadbackground();
        uploadrover();
    }
}