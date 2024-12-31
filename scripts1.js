console.log("Scripts 1");
const input = document.getElementById("inputColorChange");
const input1 = document.getElementById("inputSizeChange");
let data = null;
const square = document.getElementById("square1");


const itemsGrid = document.getElementById("items-grid");

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
        fillItems();
        fillwithmap();

        
    }).catch(er=>{
        console.log("error happened ", er);
        
    })
}

function fillwithmap(){
    const simpleList = document.getElementById("simple-list");
    const str = data.products.map(item =>{

        return `<li>${item.title}, ${item.price}, ${item.description.substring(10)}...</li>`;
        })

        simpleList.appendChild(str);
        
}
function fillItems(){
     

    for(let i = 0; i < data.products.length; i++){


        const itemData = data.products[i];

        const item = document.createElement("div");
        item.setAttribute("class", "item1");
        const title = document.createElement("h3");
        const brand = document.createElement("h4");
        const desctiption = document.createElement("p");
        const price = document.createElement("p");
        const img = document.createElement("img");
        img.setAttribute("src", itemData.images[0]);
        img.setAttribute("alt", itemData.title);
        img.setAttribute("style", "width: 100px");


        brand.innerHTML = itemData.brand ? itemData.brand : "n/a";
        title.innerHTML = itemData.title;
        desctiption.innerHTML = itemData.description;
        price.innerHTML = itemData.price;

        item.appendChild(title);
        item.appendChild(brand);
        item.appendChild(desctiption);
        item.appendChild(price);
        item.appendChild(img);



        //adding to the div 
        itemsGrid.appendChild(item);

    }
}