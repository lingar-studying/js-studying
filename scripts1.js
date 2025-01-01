console.log("Scripts 1");
const input = document.getElementById("inputColorChange");
const input1 = document.getElementById("inputSizeChange");
let data = null;
const square = document.getElementById("square1");

let filterData = [];
const itemsGrid = document.getElementById("items-grid");




function changeColor() {
    console.log("change color");

    const value = input.value;
    console.log("value");
    square.style.backgroundColor = value;

}

function changeSize() {
    const value = input1.value;
    square.style.width = value + "px";
    square.style.height = value + "px";

}

function getProducts() {
    console.log("getProducts");

    return fetch('https://dummyjson.com/products')
        .then((res) => {

            // data = res.json();
            return res.json();
        });
    // .then(function(res) res.json())
    // .then(res => res.json())
    // .then(console.log);
}

function initPage2() {
    getProducts().then(res => {
        console.log("got those products: ", res);
        data = res;
        fillItems();
        fillWithmap();
        let x = 5 + 6 *7;
        console.log("x = " + x);
        filterData = data.products.map(item=>`${item.title} = ${item.price}`);


        //add listner by input 

        console.log("input = ", document.getElementById("filter-input"));
        
         document.getElementById("filter-input").addEventListener("keyup", ()=>{

            console.log("hi add listner");
            
            const inputFilter = document.getElementById("filter-input");
            const value = inputFilter.value;
            let finalData = [];
            if(value.length>1){
                finalData = filterData.filter(item=> {
                    
                    // console.log("item = ", item);
                    
                   return item.toLowerCase().includes(value.toLowerCase())});
            }else{
                finalData = filterData;
            }
            console.log("final-data = ", finalData);
            
            //show items 
            const filteredArea = document.getElementById("filtered-data");
            filteredArea.innerHTML = '';
            finalData.forEach( item=> {

                const newRow = document.createElement("p");
                newRow.innerHTML = item;    
                filteredArea.appendChild(newRow);
            })

        });

        //making object of props as id only of expensive products
        const reduced = data.products.reduce(outerFunction, {});

        function outerFunction(obj, currentItem){
            if(currentItem.price> 10){
                obj["item" + currentItem.id] = currentItem;
            }
            return obj;
        }

        console.log("reduced - only expensive items, by id: \n", reduced );
        

    }).catch(er => {
        console.log("error happened ", er);

    })
}

function fillWithmap() {
    const simpleList = document.getElementById("simple-list");

    const simpleItemsData = data.products.map(item => {

        return `${item.title}, ${item.price}, ${item.description.substring(10)}...`;
        
    });
    let string = "<h1>hhhh</h1>";
    //simpleList.innerHTML = "<h1>hsdhsd</h1>"; //it will work
    //simpleList.appendChild(string);

    simpleItemsData.forEach(element => {
        // console.log("element = " + element);
        
        // simpleList.appendChild(`<li>${element}</li>`)
        simpleList.innerHTML += `<li>${element}</li>`;

    });

}

function fillItems() {


    for (let i = 0; i < data.products.length; i++) {


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