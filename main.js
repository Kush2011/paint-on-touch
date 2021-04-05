mouseEvent = "";
current_position_of_mouse_x = "";
current_position_of_mouse_y = "";
last_position_of_x = "";
last_position_of_x = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
window.addEventListener("mousemove", my_mousedown);
function my_mousedown(e){
    
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
window.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    current_position_of_mouse_x = e.touches[0].clientX - canvass.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvass.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}