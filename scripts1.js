console.log("Scripts 1");
const input = document.getElementById("inputColorChange");
const input1 = document.getElementById("inputSizeChange");
let data = null;
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

function getProducts(){
    console.log("getProducts");
    
    return fetch('https://dummyjson.com/products')
    .then((res)=>{
        
       // data = res.json();
        return res.json();
    });
    // .then(function(res) res.json())
    // .then(res => res.json())
    // .then(console.log);
}
function initPage2(){
    getProducts().then(res=>{
        console.log("got those products: ", res);
        data = res;
        
    }).catch(er=>{
        console.log("error happened ", er);
        
    })
}