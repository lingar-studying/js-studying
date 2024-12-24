console.log("Scripts 1");
const input = document.getElementById("inputColorChange");
const input1 = document.getElementById("inputSizeChange");

const square = document.getElementById("square1");

function changeColor(){
    console.log("change color");

    const value = input.value;
    console.log("value");
    square.style.backgroundColor = value;   
    
}
function changeSize(){
    const value = input1.value;
    square.style.width = value +"px";
    square.style.height = value +"px";

}