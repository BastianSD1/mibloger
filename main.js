canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 1;

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width =new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener(" touchstart ", my_touchstart);

function my_touchstart(e) {
    console.log("my_touchstart");
    color = document.getElementById(" --- ").value;
    width_of_line = document.getElementById(" --- ").value;
         
    screen_width = e.touches[0].clientX - canvas.offsetLeft;
    screen_heigh = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener(" touchmove ", my_touchmove);

function my_touchmove(e) {

	console.log("my_touchMove");

    offsetLeft = e.touches[0].clientX - canvas.offsetLeft;
    offsetTop = e.touches[0].clientY - canvas.offsetTop;

    // Igual que la app pasada de pintar
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Última posición de las coordenadas X y Y = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Posición actual de las coordenadas X y Y = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    // fin de la app pasada de pintar
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
